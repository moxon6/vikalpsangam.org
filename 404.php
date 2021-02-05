<?php
global $wp_query;

$context = Timber::context();

$context["recent_posts"] = buffer(fn() => the_widget( 'WP_Widget_Recent_Posts' ));
$context["categories"] = buffer(fn() => the_widget( 'WP_Widget_Categories', 'title=CATEGORIES&count=1' ) );

Timber::render( array( 'pages/page-not-found.twig' ), $context );