<?php

// $context = Timber::context();
// $timber_post = new Timber\Post();
// $context['post'] = $timber_post;
// Timber::render( array( 'page-index.twig', 'page.twig' ), $context );

$NUMBER_OF_CAROUSEL_ITEMS = 3;
$NUMBER_PROMOTED_ARTICLES = 3;

$context["carousel_items"] = Timber::get_posts(array(
    'numberposts'	=> $NUMBER_OF_CAROUSEL_ITEMS,
    'post_type'		=> 'post',
    'meta_key'		=> 'add_to_carousel',
    'meta_value'	=> '1'
));

$context["promoted_articles"] = Timber::get_posts(array(
    'numberposts'	=> $NUMBER_PROMOTED_ARTICLES,
    'post_type'		=> 'post',
    'meta_key'		=> 'promoted',
    'meta_value'	=> '1'
));

?>

<?php get_header(); ?>

<?php Timber::render( array( 'partials/front-page-main-section.twig' ), $context ); ?>

<?php get_template_part( 'template-parts/front-page/stories-by-category-section'); ?>

<?php get_template_part( 'template-parts/front-page/about-section'); ?>

<?php get_footer();