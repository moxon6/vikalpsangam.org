/* eslint-disable no-console */
import Joi from 'joi';
import posts from '../../posts.json';
import schema from './schema';

posts.forEach((post) => {
  try {
    Joi.assert(post, schema);
  } catch (error) {
    console.log(`Invalid post ${post.id} : ${error}`);
  }
});
