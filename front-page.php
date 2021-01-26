<?php get_header(); ?>

<?php

$NUMBER_OF_CAROUSEL_ITEMS = 3;
$NUMBER_PROMOTED_ARTICLES = 3;
$NUMBER_STORIES_BY_CATEGORY = 4;

$carousel_items = get_posts(array(
	'numberposts'	=> $NUMBER_OF_CAROUSEL_ITEMS,
	'post_type'		=> 'post',
	'meta_key'		=> 'add_to_carousel',
	'meta_value'	=> '1'
));

$promoted_articles = get_posts(array(
	'numberposts'	=> $NUMBER_PROMOTED_ARTICLES,
	'post_type'		=> 'post',
	'meta_key'		=> 'promoted',
	'meta_value'	=> '1'
));

$categoryPosts = (new Categories())->getCategoryPosts($NUMBER_STORIES_BY_CATEGORY);

?>


<section class="container-fluid top-section">
    <div class="row no-right-margin">
        <div class="col-md-8 col-xs-12">
            <?php 
                    get_template_part( 'template-parts/front-page/carousel', null, [ "article_content" => $carousel_items ]); 
                ?>
        </div>
        <div class="col-md-4 col-xs-12 featured-list">
            <?php  // get_template_part( 'template-parts/front-page/highlights', null, [ "article_content" => $promoted_articles ]); ?>
        </div>
    </div>
</section>

<section class="category-section">
    <?php get_template_part( 'template-parts/front-page/categories', null, [ "categoryPosts" => $categoryPosts ]); ?>
</section>

<?php wp_reset_postdata(); ?>

<section class="about-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>ABOUT VIKALP SANGAM</h3>
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</section>


<?php get_footer();