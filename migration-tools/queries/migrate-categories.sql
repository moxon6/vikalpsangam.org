INSERT INTO wordpress.wp_terms (term_id, name, slug, term_group)
SELECT
    id + 2000 as term_id,
	title as name,
    slug,
    0 as term_group
from django_migration.blog_blogcategory;

INSERT INTO wordpress.wp_term_taxonomy (term_id, taxonomy, description, parent, count)
SELECT
    T.id + 2000 as term_id,
	"category" as taxonomy,
    T.category_long_description as description,
    0 as parent,
    0 as count
from 
(
    SELECT * from  django_migration.blog_blogcategory
    
	INNER JOIN django_migration.vikalp_articlecategory
    WHERE django_migration.blog_blogcategory.id = django_migration.vikalp_articlecategory.blogcategory_ptr_id
) as T;

INSERT INTO wordpress.wp_term_relationships
SELECT 
    article_id + 2000 as object_id,
    term_taxonomy_id as term_taxonomy_id,
    0 as term_order
FROM `django_migration`.`vikalp_article_article_categories`
INNER JOIN `django_migration`.`vikalp_articlecategory`, `wordpress`.`wp_term_taxonomy`
WHERE 
	`django_migration`.`vikalp_article_article_categories`.`articlecategory_id` = `django_migration`.`vikalp_articlecategory`.`blogcategory_ptr_id` AND
    `wordpress`.`wp_term_taxonomy`.term_id = `django_migration`.`vikalp_article_article_categories`.`articlecategory_id` + 2000;