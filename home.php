<?php
    $context = Timber::context();
    $context["post"] = new Timber\Post();
    Timber::render( array( 'page-latest-stories.twig' ), $context );
?>