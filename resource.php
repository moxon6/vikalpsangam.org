<?php
$resource_category = $args["resource_category"];
$resource_map = [
  "economics-technologies" => "alternative-economies",
  "energy" => "energy",
  "environment-ecology" => "environment-ecology",
  "food-water" => "food-and-water",
  "health-hygiene" => "health-hygiene",
  "knowledge-media" => "knowledge-media",
  "learning-education" => "learning-and-education",
  "livelihoods" => "livelihoods",
  "politics" => "alternative-politics",
  "settlements-transport" => "settlements",
  "society-culture-peace" => "society-culture",
];

$category = get_category_by_slug($resource_map[$resource_category]);

$context = Timber::context();
$context["post"] = new Timber\Post();
$context["category"] = new Timber\Term($category);
$context["resource_category"] = $resource_category;
Timber::render(["pages/_page-resource.twig"], $context);
?>
