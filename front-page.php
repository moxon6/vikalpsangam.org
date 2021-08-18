<?php
    $context = Timber::context();
    $context['post'] = new Timber\Post();

    $context["latest_stories"] = Timber::get_posts(array(
        'numberposts'	=> 8,
        'post_type'		=> 'post',
        'category__not_in'	=> $excluded_categories,
        'has_password'   => false
    ));

    $context["highlights"] = Timber::get_posts(array(
        'numberposts'	=> 4,
        'post_type'		=> 'post',
        'meta_key'		=> 'promoted',
        'meta_value'	=> '1',
        'category__not_in'	=> $excluded_categories,
        'has_password'   => false
    ));

    Timber::render( array( 'pages/_page-front.twig' ), $context );
?>