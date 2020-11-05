import * as fs from 'fs';

const posts = JSON.parse(
  fs.readFileSync("posts.json", "utf-8")
)

console.log("posts.json summary")
console.log(`Number of posts ${posts.length}`)

const SITE = "https://dev.vikalpsangam.org"

const nonASCIIPosts = posts
    .filter(post => post.slug !== encodeURI(post.slug))
    .map(post => ({...post, slug: `${SITE}/article/${post.slug}`}))
    .slice(0,10)
console.log("A subset of posts with non-ascii urls to test:")
console.table(nonASCIIPosts, ["title", "slug"])

const postsWithComments = posts
    .filter(post => post.comments.length > 0)
    .map(post => ({...post, slug: `${SITE}/article/${post.slug}`}))
    .slice(0,10)
console.log("A subset of posts with comments to test:")
console.table(postsWithComments, ["title", "slug"])

