<?php
    $resource = get_query_var( "resource", null);
    if (!is_null($resource)) {    
        get_template_part(
            "resource", 
            null,
            [ "resource_category" => explode("resources-", $resource)[1] ]
        );
        exit();
    }
?>

<?php

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'page.twig' ), $context );