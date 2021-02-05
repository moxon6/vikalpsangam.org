<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['term'] = new Timber\Term();

Timber::render( array( 'pages/_page-term.twig', 'pages/page.twig' ), $context );