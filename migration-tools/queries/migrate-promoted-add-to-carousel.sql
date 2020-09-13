INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) 

    SELECT
        blogpost_ptr_id + 2000 as post_id,
        "promoted" as meta_key,
        promoted as meta_value
    FROM django_migration.vikalp_article;

INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) 

    SELECT
        blogpost_ptr_id + 2000 as post_id,
        "add_to_carousel" as meta_key,
        add_to_carousel as meta_value
    FROM django_migration.vikalp_article;

