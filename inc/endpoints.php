<?php

function register_map_endpoint() {

    function get_coordinates() {
        $posts = get_posts([
            "numberposts" => -1
        ]);

        $coordinates = array_map(function($post) {
            $latitude = get_post_meta($post->ID, 'latitude', TRUE);
            $longitude = get_post_meta($post->ID, 'longitude', TRUE);
            return [
                "title" => get_the_title( $post->ID ),
                "url" => get_the_permalink($post->ID),
                "categories" => $post->post_category,
                "latitude" => (float)$latitude,
                "longitude" => (float)$longitude,
                "thumbnail" => get_the_post_thumbnail_url($post),
                "excerpt" => get_the_excerpt($post)
            ];
        }, $posts);
    
        return array_filter(
            $coordinates, 
            fn($c) => (
                $c["latitude"] != 0 && 
                $c["longitude"] != 0 && 
                count($c["categories"]) > 0
            )
        );
    }

    function get_article_coordinates($request) {
        
        $colors = [
            '#a6cee3',
            '#1f78b4',
            '#b2df8a',
            '#33a02c',
            '#fb9a99',
            '#e31a1c',
            '#fdbf6f',
            '#ff7f00',
            '#cab2d6',
            '#6a3d9a',
            '#dddddd',
        ];

        $cache_key = "get_article_coordinates";

        $coordinates = get_coordinates();
        if (empty($coordinates)) {
            $coordinates = get_coordinates();
            set_transient( $cache_key, $coordinates, DAY_IN_SECONDS );
        }

        $categories = get_categories();

        foreach($categories as $category) {
            $category->color = $colors[array_rand($colors)];
        }

        $response = new WP_REST_Response([
            "coordinates" => $coordinates,
            "categories" => $categories
        ]);
        $response->set_status(200);
        $response->set_headers(array('Cache-Control' => 'max-age=3600'));			
        return $response;
    }

	register_rest_route( 'vikalpsangam/v2', 'map', array(
		'methods'  => 'GET',
		'callback' => 'get_article_coordinates'
	));
}

add_filter( 'rest_allow_anonymous_comments', '__return_true' ); 

function register_comments_endpoint() {

    function get_comments_rest($request) {       
        global $post;
        $post = get_post($request["post_id"]);
        setup_postdata($post);

        $response = new WP_REST_Response(
            Timber::compile(
                'partials/_comments.twig', 
                [ "post" => new Timber\Post($post)]
            )
        );
        $response->set_status(200);
        return $response;
    }

	register_rest_route( 'vikalpsangam/v1', 'comments/(?P<post_id>\d+)', array(
		'methods'  => 'GET',
		'callback' => 'get_comments_rest'
	));
}

add_action('rest_api_init', function () {
    register_map_endpoint();
    register_comments_endpoint();
});