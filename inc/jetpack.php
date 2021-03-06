<?php

function setup_infinite_scroll() {
    add_theme_support( 'infinite-scroll', array(
        'container' => 'infinite-scroll-content',
        'render'    => 'infinite_scroll_render',
        'wrapper'   => false,
		'type'      => 'click',
		'posts_per_page' => 9,
    ) );
}

add_action('after_setup_theme', 'setup_infinite_scroll');

function infinite_scroll_render() {
	$context = [
		'posts' => Timber::get_posts(),
	];
	Timber::render('partials/_post-tile-loop.twig', $context);
}

function jetpackme_more_related_posts( $options ) {
    $options['size'] = 4;
    return $options;
}
add_filter( 'jetpack_relatedposts_filter_options', 'jetpackme_more_related_posts' );

function jetpackme_filter_exclude_policy_edits( $filters ) {
    $filters[] = array(
        'not' => array(
            'term' => array(
                'category.slug' => 'policy-edits',
            ),
        ),
    );
 
    return $filters;
}
add_filter( 'jetpack_relatedposts_filter_filters', 'jetpackme_filter_exclude_policy_edits' );

function jetpackme_filter_require_category( $filters ) {
    $filters[] = array(
        'exists' => array(
            'field' => 'category.slug',
        ),
    );
 
    return $filters;
}
add_filter( 'jetpack_relatedposts_filter_filters', 'jetpackme_filter_require_category' );