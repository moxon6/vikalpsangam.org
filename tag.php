<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['term'] = new Timber\Term();

Timber::render( array( 'page-term.twig', 'page.twig' ), $context );