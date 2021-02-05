<?php
global $wp_query;

$context = Timber::context();
$context["found_posts"] = $wp_query->found_posts;
$context["search_query"] = get_search_query();
Timber::render( array( 'pages/page-search.twig' ), $context );