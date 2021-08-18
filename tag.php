<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context["post"] = $timber_post;
$context["term"] = new Timber\Term();

Timber::render(["pages/_page-term.twig"], $context);
