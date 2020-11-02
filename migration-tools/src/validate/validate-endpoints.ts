import * as fs from 'fs';
import axios from 'axios';
import * as ProgressBar from 'progress';

const posts = JSON.parse(
  fs.readFileSync("posts.json", "utf-8")
)

async function main() {
  console.log("Validating endpoints are accessible")
  const bar = new ProgressBar(':bar', { total: posts.length });

  for (const post of posts) {
    bar.tick();
    let url
    try {
      url = encodeURI(`http://wordpress/article/${post.slug}/?local=true`)
      const result = await axios.get(url)
      if (result.status !== 200) {
        console.log(url, result.status)
      }
    } catch(e) {
      console.log(url)
      throw e;
    }
  } 
}

main();