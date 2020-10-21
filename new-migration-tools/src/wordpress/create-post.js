import setupModels from './setup-models';
import { Sequelize, Op } from 'sequelize'
import posts from '../../posts.json';

const post = posts[0]

const sequelize = new Sequelize('mysql://wordpress:wordpress@db:3306/wordpress'); // Example for postgres
const wordpressModels = setupModels(sequelize);

async function main() {
  try {
    await sequelize.authenticate();

    const post = wordpressModels.wp_posts.create({
        ID:"",
        post_author:"",
        post_date:"",
        post_date_gmt:"",
        post_content:"",
        post_title:"",
        post_excerpt:"",
        post_status:"",
        comment_status:"",
        ping_status:"",
        post_password:"",
        post_name:"",
        to_ping:"",
        pinged:"",
        post_modified:"",
        post_modified_gmt:"",
        post_content_filtered:"",
        post_parent:"",
        guid:"",
        menu_order:"",
        post_type:"",
        post_mime_type:"",
        comment_count:"",
    })

    await sequelize.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();
