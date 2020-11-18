import * as fs from 'fs';
import * as path from 'path';
import * as R from 'ramda';
import setupModels from './setup-models';
import schema from '../validate/schema';
import { StructType } from 'superstruct'
import { wp_termsAttributes } from './models/wp_terms'
import { wp_commentsAttributes } from './models/wp_comments';
import { wp_posts, wp_postsAttributes } from './models/wp_posts';
import { serialize } from 'php-serialize'
import getSequelizeClient from './get-sequelize-client';

const logger = {
  log(message: string) {
    fs.appendFileSync('create-post.log', `${Date.now()} : ${message} \n`);
  }
}

type Post = StructType<typeof schema>;

const posts = JSON.parse(
  fs.readFileSync("posts.json", "utf-8")
) as Post[];

const sequelize = getSequelizeClient();

const wordpressModels = setupModels(sequelize);

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

const batchCreate =  async <T>(model, data: Array<T>) => (await Promise.all( 
  R.splitEvery(50, data).map(dataGroup => model.bulkCreate(dataGroup))
)).flat()

async function main() {
  try {
    await sequelize.authenticate();

    logger.log("\n_________Start Job_________")

    logger.log("Mapping posts")
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
      post_name: encodeURI(post.slug),
      to_ping: "",
      pinged: "",
      post_modified: new Date(post.updated),
      post_modified_gmt: new Date(post.updated),
      post_content_filtered: "",
      post_parent: 0,
      guid: post.guid,
      menu_order: 0,
      post_type: "post",
      post_mime_type: "",
      comment_count: post.comments_count,
    }));

    logger.log("Uploading posts ")
    const wp_posts = (await Promise.all( 
      R.splitEvery(50, mapped).map(postgroup => wordpressModels.wp_posts.bulkCreate(postgroup))
    )).flat()

    logger.log("Mapping meta")
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

    logger.log("Uploading meta")
    const wp_meta = await batchCreate(wordpressModels.wp_postmeta, mappedMeta)

    logger.log("Mapping mediaExtended")
    const mediaExtended = R.zip(posts, wp_posts)
      .flatMap(([post, wp_post]) => post.media.map(media => ({
        ...media,
        publish_date: post.publish_date,
        updated: post.updated,
        post_parent: wp_post.ID
      })))
      
    logger.log("Mapping media postattributes")
    const mediaEntries: wp_postsAttributes[] = mediaExtended.map(media => ({
        post_author: 0,
        post_date: new Date(media.publish_date),
        post_date_gmt: new Date(media.publish_date),
        post_content: "migrated_media_entry",
        post_title: path.basename(media.file),
        post_excerpt: "",
        post_status: "inherit",
        comment_status: "closed",
        ping_status: "closed",
        post_password: "",
        post_name: media.file,
        to_ping: "",
        pinged: "",
        post_modified: new Date(media.updated),
        post_modified_gmt: new Date(media.updated),
        post_content_filtered: "",
        post_parent: media.post_parent,
        guid: media.file,
        menu_order: 0,
        post_type: "attachment",
        post_mime_type: media.mime_type,
        comment_count: 0,
      }))
      
    logger.log("Uploading media postattributes")
    const wp_posts_media = await batchCreate(wordpressModels.wp_posts, mediaEntries)

    logger.log("Mapping media postmeta")
    const mediaMetaEntries = R.zip(mediaExtended, wp_posts_media).flatMap(([media, wp_post_media]) => [{
      post_id: wp_post_media.ID,
      meta_key: "_wp_attached_file",
      meta_value: media.file
    }, {
      post_id: wp_post_media.ID,
      meta_key: "_wp_attachment_metadata",
      meta_value: serialize({
        width: media.width,
        height: media.height,
        file: media.file
      })
    }, (media.is_featured ? {
      post_id: media.post_parent,
      meta_key:"_thumbnail_id",
      meta_value: wp_post_media.ID
    } : null) ].filter(x => x))

    logger.log("Uploading media postmeta")
    await batchCreate(wordpressModels.wp_postmeta, mediaMetaEntries)

    logger.log("Uploading comments")
    await uploadCommentsAndLinks(wp_posts);

    logger.log("Fetching categories")
    const wp_categories = (await wordpressModels.wp_terms.findAll({
      include: [{
        model: wordpressModels.wp_term_taxonomy as any,
        where: {
          taxonomy: 'category',
        },
      }]
    })
    ).map((p) => p.toJSON());

    logger.log("Grouping categories by slug")
    const wp_categories_by_slug = R.indexBy(R.prop('slug'), wp_categories)
  
    logger.log("Mapping category relations")
    const categoryRelations = R.zip(posts, wp_posts).flatMap(([post, wp_post]) => post.categories.map(category => ({
          object_id: wp_post.ID,
          term_taxonomy_id: (wp_categories_by_slug[category.slug] as any).wp_term_taxonomy.term_taxonomy_id,
          term_order: 0
        })
    ))

    logger.log("Uploading category relations")
    await batchCreate(wordpressModels.wp_term_relationships, categoryRelations)

    logger.log("Creating unique set of tags")
    const tags = R.uniqBy(
      tag => tag.slug,
      posts
        .flatMap(post => post.tags)
        .map(tag => ({
           name: tag.title,
           slug: tag.slug,
           term_group: 0,
        }))
    )
    
    logger.log("Uploading tags")
    const wp_tags_result = (await batchCreate(wordpressModels.wp_terms, tags)) as wp_termsAttributes[]

    logger.log("Uploading post tags")
    const tagsTaxonomy = wp_tags_result.map(wp_tag => ({
      term_id: wp_tag.term_id,
      taxonomy: "post_tag",
      description: "",
      parent: 0,
      count: 0
    }))
    
    logger.log("Uploading post tags")
    await batchCreate(wordpressModels.wp_term_taxonomy, tagsTaxonomy)

    const wp_tags = (await wordpressModels.wp_terms.findAll({
      include: [{
        model: wordpressModels.wp_term_taxonomy as any,
        where: {
          taxonomy: 'post_tag',
        },
      }]
    })
    ).map((p) => p.toJSON());

    logger.log("Index tags by slug")
    const wp_tags_by_slug = R.indexBy(R.prop('slug'), wp_tags)
    
    logger.log("Mapping relations between post and tag")
    const tagRelations = R.zip(posts, wp_posts).flatMap(([post, wp_post]) => post.tags.map(tag => ({
          object_id: wp_post.ID,
          term_taxonomy_id: (wp_tags_by_slug[tag.slug] as any).wp_term_taxonomy.term_taxonomy_id,
          term_order: 0
        })
    ))
    
    logger.log("Uploading relations between post and tag")
    await batchCreate(wordpressModels.wp_term_relationships, tagRelations)

    await sequelize.close();
  } catch (error) {
    logger.log(error)
    throw error;
  }
}

main();
