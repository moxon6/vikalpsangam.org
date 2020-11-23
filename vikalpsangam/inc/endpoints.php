<?php

add_action('rest_api_init', function () {
    // Several expensive calls - cache this method?
    function get_article_coordinates($request) {

        $posts = get_posts([
            "numberposts" => -1
        ]);

        $coordinates = array_map(function($post) {
            $latitude = get_post_meta($post->ID, 'latitude', TRUE);
            $longitude = get_post_meta($post->ID, 'longitude', TRUE);
            return [
                "title" => get_the_title( $post->ID ),
                "url" => get_the_permalink($post->ID),
                "latitude" => (float)$latitude,
                "longitude" => (float)$longitude,
            ];
        }, $posts);

        $coordinates = array_filter($coordinates, function($c) {
            return $c["latitude"] != 0 && $c["longitude"] != 0;
        });

        if (empty($coordinates)) {
            return new WP_Error( 'empty_category', 'the array is empty', array('status' => 404) );
        }

        $response = new WP_REST_Response($coordinates);
        $response->set_status(200);
        return $response;
    }

	register_rest_route( 'vikalpsangam/v1', 'map', array(
		'methods'  => 'GET',
		'callback' => 'get_article_coordinates'
	));
});