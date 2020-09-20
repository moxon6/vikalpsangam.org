
INSERT INTO `wordpress`.`wp_postmeta` (post_id, meta_key, meta_value)
SELECT post_parent as post_id, "_thumbnail_id" as meta_key, id as meta_value from `wordpress`.`wp_posts`
WHERE post_excerpt = "migrated_featured_image"