<?php

use Tribe\Events\Views\V2\Template_Bootstrap;

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['events'] = tribe( Template_Bootstrap::class )->get_view_html();

Timber::render('pages/_page-events.twig', $context );