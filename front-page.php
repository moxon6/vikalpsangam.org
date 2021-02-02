<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$NUMBER_OF_CAROUSEL_ITEMS = 3;
$NUMBER_PROMOTED_ARTICLES = 3;
$NUMBER_STORIES_BY_CATEGORY = 4;

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

$context["category_posts"] = (new Categories())->getCategoryPosts($NUMBER_STORIES_BY_CATEGORY);

Timber::render( array( 'page-front.twig', 'page.twig' ), $context );

?>