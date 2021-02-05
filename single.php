<?php
    $context = Timber::context();
    $context["post"] = new Timber\Post();
    Timber::render( array( 'pages/page-single.twig' ), $context );
?>