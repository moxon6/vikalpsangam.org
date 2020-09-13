INSERT INTO `wordpress`.`wp_posts`
SELECT
	NULL,
    1 as post_author,
    NOW() as post_date,
    NOW() as post_date_gmt,
    "" as post_content,
    CONCAT(
        "migrated-",
        SUBSTRING_INDEX(featured_image, '/', -1)
    ) as post_title,
	"" as post_excerpt,
    "inherit" as post_status,
    "open" as comment_status,
    "closed" as ping_status,
    "" as post_password,
    REPLACE(
        SUBSTRING_INDEX(featured_image, '/', -1),
        ".",
        "_"
    ) as post_name,
    "" as to_ping,
    "" as pinged,
    NOW() as post_modified,
    NOW() as post_modified_gmt,
    "" as post_content_filtered,
    0 as post_parent,
    REPLACE(featured_image, 'uploads/', '/wp-content/uploads/migrate/') as guid,
    0 as menu_order,
    "attachment" as post_type,
    "image/png" as post_mime_type,
    0 as comment_count
FROM `django_migration`.`blog_blogpost`
WHERE CHAR_LENGTH(featured_image) > 5