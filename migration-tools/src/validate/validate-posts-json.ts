/* eslint-disable no-console */
import * as s from 'superstruct'
import * as fs from 'fs';
import schema from './schema';

const posts = JSON.parse(
  fs.readFileSync("posts.json", "utf-8")
)

posts.forEach((post) => {
  try {
    s.assert(post, schema)
  } catch (error) {
    console.log(`Invalid post ${post.id} : ${error}`);
  }
});
