INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) 

    SELECT
        blogpost_ptr_id + 2000 as post_id,
        "latitude" as meta_key,
        latitude as meta_value
    FROM django_migration.vikalp_article;

INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) 

    SELECT
        blogpost_ptr_id + 2000 as post_id,
        "longitude" as meta_key,
        longitude as meta_value
    FROM django_migration.vikalp_article;

