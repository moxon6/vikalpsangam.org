INSERT INTO wordpress.wp_terms
SELECT 
    id + 3000 as term_id,
    title as name,
    slug as slug,
    0 as term_group
FROM `django_migration`.`generic_keyword`;

INSERT INTO `wordpress`.`wp_term_taxonomy` (`term_id`,`taxonomy`,`description`,`parent`,`count`)
SELECT
    id + 3000 as term_id,
    "post_tag" as taxonomy,
    "" as description,
    0 as parent,
    0 as count
FROM `django_migration`.`generic_keyword`;

INSERT INTO `wordpress`.`wp_term_relationships` (`object_id`, `term_taxonomy_id`)
SELECT
    `object_pk` + 2000 AS `object_id`,
    `term_taxonomy_id`
FROM `django_migration`.`generic_assignedkeyword`
INNER JOIN `wordpress`.`wp_term_taxonomy` 
WHERE wordpress.`wp_term_taxonomy`.`term_id` = `django_migration`.`generic_assignedkeyword`.`keyword_id` + 3000;