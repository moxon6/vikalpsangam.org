<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'page-category.twig', 'page.twig' ), $context );