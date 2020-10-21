import { Sequelize } from 'sequelize';
import * as fs from 'fs';
import setupModels from './setup-models';
import schema from '../validate/schema';
import { StructType } from 'superstruct'

type Post = StructType<typeof schema>;

const posts = JSON.parse(
  fs.readFileSync("posts.json", "utf-8")
) as Post[];

const post = posts[0];

const sequelize = new Sequelize('mysql://wordpress:wordpress@db:3306/wordpress'); // Example for postgres
const wordpressModels = setupModels(sequelize);

async function main() {
  try {
    await sequelize.authenticate();

    const newPost = (wordpressModels.wp_posts).create({
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
      comment_count: post.comments.length,
    });

    await sequelize.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();
