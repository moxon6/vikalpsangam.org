import Joi from 'joi';
import posts from '../../posts.json';
import schema from './schema';

async function main() {
  posts.forEach((post) => {
    try {
      Joi.assert(post, schema);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Invalid post ${post.id} : ${error}`);
    }
  });
}

main();
