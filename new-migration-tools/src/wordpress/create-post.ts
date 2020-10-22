import { Sequelize } from 'sequelize';
import * as fs from 'fs';
import * as R from 'ramda';
import * as path from 'path';
import setupModels from './setup-models';
import schema from '../validate/schema';
import { StructType } from 'superstruct'
import { wp_commentsAttributes } from './models/wp_comments';
import { wp_posts, wp_postsAttributes } from './models/wp_posts';

type Post = StructType<typeof schema>;

function readPostsFromDisk() {
  const posts = JSON.parse(
    fs.readFileSync("posts.json", "utf-8")
  ) as Post[];

  return posts.map(post => ({
    ...post,
    comments: post.comments.filter(c => c.is_public && !c.is_removed)
  }))

}

const posts = readPostsFromDisk()

const sequelize = new Sequelize('mysql://wordpress:wordpress@db:3306/wordpress', {
  logging: false
}); // Example for postgres
const wordpressModels = setupModels(sequelize);

async function uploadMediaEntries(wp_posts: wp_postsAttributes[]) {
  const media: [wp_posts, string][] = R.pipe(
    R.zip(posts),
    R.map<[Post, wp_posts], [wp_posts, string][]>(
      ([post, wp_post]) => [ ...post.media, post.featured_image]
        .map(entry => [wp_post, entry])
    ),
    R.uniqBy(x => x[1])
  )(wp_posts).flat()

  const replacePath = (p : string) => p.replace("/static/media/uploads", "/wp-content/uploads/migrate")

  const mappedMedia = media.map(([wp_post, entry]) => ({
    post_author: 1,
    post_date: new Date(),
    post_date_gmt: new Date(),
    post_content: "",
    post_title: path.basename(entry),
	  post_excerpt: "migrated_featured_image",
    post_status: "inherit",
    comment_status: "open",
    ping_status: "closed",
    post_password: "",
    post_name: path.basename(entry),
    to_ping: "",
    pinged: "",
    post_modified: new Date(),
    post_modified_gmt: new Date(),
    post_content_filtered: "",
    post_parent: wp_post.ID,
    guid: replacePath(entry),
    menu_order: 0,
    post_type: "attachment",
    post_mime_type: "image/png",
    comment_count: 0,
  })) as wp_postsAttributes[]

  wordpressModels.wp_posts.bulkCreate(mappedMedia)

}

async function uploadComments(wp_posts: wp_posts[]) {

  const mapSinglePostComments = (post: Post, postId: number): wp_commentsAttributes[] => post.comments
  .map(comment => ({
    comment_post_ID: postId,
    comment_author: comment.user_name,
    comment_author_email: comment.user_email,
    comment_author_url: comment.user_url,
    comment_author_IP: comment.ip_address,
    comment_date: new Date(comment.submit_date),
    comment_date_gmt: new Date(comment.submit_date),
    comment_content: comment.comment,
    comment_karma: 1,
    comment_approved: "1",
    comment_type: "comment",
    comment_parent: 0,
    user_id: 0,
  }))

  const mappedComments = R
    .zip(posts, wp_posts)
    .flatMap(([post, newPost]) => mapSinglePostComments(post, newPost.ID))

  return await wordpressModels.wp_comments.bulkCreate(mappedComments)

}

async function uploadCommentsAndLinks(wp_posts: wp_posts[]) {

    const django_comments = posts.flatMap(post => post.comments)
    const wp_comments = await uploadComments(wp_posts)

    const mapCommentIdToWpComment = R.zipObj(
      django_comments.map(comment => comment.id),
      wp_comments
    )

    for (const comment of django_comments) {
      const djangoCommentId = comment.id
      const djangoParentId = comment.generic_threadedcomment.replied_to_id;
      if (djangoParentId !== null ) {
        const wp_child = mapCommentIdToWpComment[djangoCommentId]
        const wp_parent = mapCommentIdToWpComment[djangoParentId]
        wp_child.comment_parent = wp_parent.comment_ID
        await wp_child.save()
      }
    }
}

async function main() {
  try {
    await sequelize.authenticate();

    const mapped = posts.map(post => ({
      post_author: 0,
      post_date: new Date(post.publish_date),
      post_date_gmt: new Date(post.publish_date),
      post_content: post.content,
      post_title: post.title,
      post_excerpt: post.description,
      post_status: post.status === 1 ? "draft" : "publish",
      comment_status: post.allow_comments ? "open" : "closed",
      ping_status: "closed",
      post_password: "",
      post_name: post.slug,
      to_ping: "",
      pinged: "",
      post_modified: new Date(post.updated),
      post_modified_gmt: new Date(post.updated),
      post_content_filtered: "",
      post_parent: 0,
      guid: post.slug,
      menu_order: 0,
      post_type: "post",
      post_mime_type: "",
      comment_count: post.comments_count,
    }));

    const wp_posts = (await Promise.all( 
      R.splitEvery(100, mapped).map(postgroup => wordpressModels.wp_posts.bulkCreate(postgroup))
    )).flat()

    const mappedMeta = R.zip(posts, wp_posts).flatMap(([post, newPost]) => [
      {
        post_id: newPost.ID,
        meta_key: "author",
        meta_value: post.vikalp_article.article_author
      },
      {
        post_id: newPost.ID,
        meta_key: "latitude",
        meta_value: post.vikalp_article.latitude
      },
      {
        post_id: newPost.ID,
        meta_key: "longitude",
        meta_value: post.vikalp_article.longitude
      },
      {
        post_id: newPost.ID,
        meta_key: "promoted",
        meta_value: post.vikalp_article.promoted
      },
      {
        post_id: newPost.ID,
        meta_key: "add_to_carousel",
        meta_value: post.vikalp_article.add_to_carousel
      }
    ])

    const meta = await wordpressModels.wp_postmeta.bulkCreate(mappedMeta)

    await uploadMediaEntries(wp_posts)

    await uploadCommentsAndLinks(wp_posts);

    await sequelize.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();
