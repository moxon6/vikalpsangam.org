<?php
global $wp_query;

$context = Timber::context();

$context["recent_posts"] = buffer(function () {
  return the_widget("WP_Widget_Recent_Posts");
});
$context["categories"] = buffer(function () {
  return the_widget("WP_Widget_Categories", "title=CATEGORIES&count=1");
});

Timber::render(["pages/_page-not-found.twig"], $context);
