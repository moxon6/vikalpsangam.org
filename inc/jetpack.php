<?php

function setup_infinite_scroll()
{
  add_theme_support("infinite-scroll", [
    "container" => "infinite-scroll-content",
    "render" => "infinite_scroll_render",
    "wrapper" => false,
    "type" => "click",
    "posts_per_page" => 9,
  ]);
}

add_action("after_setup_theme", "setup_infinite_scroll");

function infinite_scroll_render()
{
  global $wp_query;
  $context = [
    "posts" => Timber::get_posts(),
    "show_categories" => $wp_query->query["pagename"] == "stories",
  ];
  Timber::render("partials/_post-tile-loop.twig", $context);
}

function jetpackme_more_related_posts($options)
{
  $options["size"] = 6;
  $options["headline"] = "Related Content";
  return $options;
}
add_filter("jetpack_relatedposts_filter_options", "jetpackme_more_related_posts");

function jetpackme_filter_exclude_policy_edits($filters)
{
  $filters[] = [
    "not" => [
      "term" => [
        "category.slug" => "policy-edits",
      ],
    ],
  ];

  return $filters;
}
add_filter("jetpack_relatedposts_filter_filters", "jetpackme_filter_exclude_policy_edits");

function jetpackme_filter_require_category($filters)
{
  $filters[] = [
    "exists" => [
      "field" => "category.slug",
    ],
  ];

  return $filters;
}
add_filter("jetpack_relatedposts_filter_filters", "jetpackme_filter_require_category");
add_filter("jetpack_sso_bypass_login_forward_wpcom", "__return_true");
add_filter("jetpack_remove_login_form", "__return_true");
