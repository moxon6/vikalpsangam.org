INSERT INTO wordpress.wp_posts(
    SELECT
        id + 2000 AS id,
        1 AS post_author,
        publish_date AS post_date,
        publish_date AS post_date_gmt,
        content AS post_content,
        title AS post_title,
        "" AS post_excerpt,
        IF( STATUS = "1", "draft", "publish" ) AS post_status,
        "closed" AS comment_status,
        "closed" AS ping_status,
        "" AS post_password,
        slug AS post_name,
        "" AS to_ping,
        "" AS pinged,
        updated AS post_modified,
        updated AS post_modified_gmt,
        "" AS post_content_filtered,
        0 AS post_parent,
        slug AS guid,
        0 AS menu_order,
        "post" AS post_type,
        "" AS post_mime_type,
        comments_count AS comment_count
FROM
    django_migration.blog_blogpost
)