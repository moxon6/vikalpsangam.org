<?php
$context = Timber::context();

$context["front_page_sections"] = [
  [
    "header" => "Latest Stories",
    "posts" => Timber::get_posts([
      "numberposts" => 8,
      "post_type" => "post",
      "category__not_in" => $excluded_categories,
      "has_password" => false,
    ]),
  ],
  [
    "header" => "Highlights",
    "posts" => Timber::get_posts([
      "numberposts" => 4,
      "post_type" => "post",
      "meta_key" => "promoted",
      "meta_value" => "1",
      "category__not_in" => $excluded_categories,
      "has_password" => false,
    ]),
  ],
];

Timber::render(["pages/_page-front.twig"], $context);
?>
