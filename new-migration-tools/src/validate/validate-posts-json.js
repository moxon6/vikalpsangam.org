import Joi from 'joi';
import posts from '../../posts.json';
import schema from './schema';

async function main() {
  // eslint-disable-next-line no-restricted-syntax

  posts.forEach((post) => {
    try {
      Joi.assert(post, schema);
    } catch (error) {
      console.log(`Invalid post ${post.id} : ${error}`);
    }
  });
}

main();
