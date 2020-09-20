INSERT INTO `wordpress`.`wp_posts`
SELECT
	NULL,
    1 as post_author,
    NOW() as post_date,
    NOW() as post_date_gmt,
    "" as post_content,
    SUBSTRING_INDEX(featured_image, '/', -1) as post_title,
	"migrated_featured_image" as post_excerpt,
    "inherit" as post_status,
    "open" as comment_status,
    "closed" as ping_status,
    "" as post_password,
    SUBSTRING_INDEX(featured_image, '/', -1) as post_name,
    "" as to_ping,
    "" as pinged,
    NOW() as post_modified,
    NOW() as post_modified_gmt,
    "" as post_content_filtered,
    `django_migration`.`blog_blogpost`.id + 2000 as post_parent,
    REPLACE(featured_image, 'uploads/', 'http://localhost:8000/wp-content/uploads/migrate/') as guid,
    0 as menu_order,
    "attachment" as post_type,
    "image/png" as post_mime_type,
    0 as comment_count
FROM `django_migration`.`blog_blogpost`
WHERE LENGTH(featured_image) > 0