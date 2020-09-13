UPDATE wp_posts
SET guid = REPLACE(guid, 'http://localhost:8000/', '/')
WHERE post_type = "attachment";