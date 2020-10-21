import posts from '../../posts.json'

console.table(
    posts
        .filter(post => post.comments_count > 0 || post.comments.length > 0)
        .map(post => ({
            id: post.id + 2000,
            recorded: post.comments_count,
            actual: post.comments.filter(x => x.is_public && !x.is_removed).length
        }))
        .filter(post => post.recorded !== post.actual)
);