<?php
$context = Timber::context();
$context["post"] = new Timber\Post();
Timber::render(["pages/_page-single.twig"], $context);
?>
