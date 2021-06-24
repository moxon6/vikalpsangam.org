<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'pages/_page-' . $timber_post->post_name . '.twig', 'pages/_page.twig' ), $context );