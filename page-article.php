<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$context["stories_by_category"] = array_map(
    fn($category) => [
        "category" => $category,
        "posts" => Timber::get_posts(array(
            'numberposts'	=> 3,
            'post_type'		=> 'post',
            "orderby"   => "date",
            "order"     => "DSC",
            'category'	=> $category -> id
        ))
    ],
    $context["post_categories"]
);

Timber::render( array( 'pages/_page-' . $timber_post->post_name . '.twig' ), $context );