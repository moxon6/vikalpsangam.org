INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) 

    SELECT
        blogpost_ptr_id + 2000 as post_id,
        "author" as meta_key,
        article_author as meta_value
    FROM django_migration.vikalp_article

