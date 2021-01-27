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

<section>
    <div class="container-fluid top-section-container">
        <div class="row ml-auto mr-auto pt-4 pb-4">
            <div class="col-xl-8 col-md-12 carousel-section">
                <?php get_template_part( 'template-parts/front-page/carousel', null, [ "article_content" => $carousel_items ]); ?>
            </div>
            <div class="col-xl-4 col-md-12 featured-list">
                <?php  get_template_part( 'template-parts/front-page/highlights', null, [ "article_content" => $promoted_articles ]); ?>
            </div>
        </div>
    </div>
</section>

<section class="categories-section">
    <div class="container categories-section-container pt-4 pb-4">
        <?php get_template_part( 'template-parts/front-page/categories', null, [ "categoryPosts" => $categoryPosts ]); ?>
    </div>
</section>

<?php wp_reset_postdata(); ?>

<section>
    <div class="container-fluid about-section-container">
        <div class="about-section row">
            <div class="col-md-12">
                <h3>ABOUT VIKALP SANGAM</h3>
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</section>


<?php get_footer();