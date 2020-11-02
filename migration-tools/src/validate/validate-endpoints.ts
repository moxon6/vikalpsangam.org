import * as fs from 'fs';
import axios from 'axios'

const posts = JSON.parse(
  fs.readFileSync("posts.json", "utf-8")
)

async function main() {
  for (const post of posts) {
    try {
      const url = encodeURI(`http://wordpress/article/${post.slug}?local=true`)
      const result = await axios.get(url)
      if (result.status !== 200) {
        console.log(url, result.status)
      }
    } catch(e) {
      console.log(post)
      throw e;
    }
  } 
}

main();