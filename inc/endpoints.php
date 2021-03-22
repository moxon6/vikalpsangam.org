<?php

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
    register_comments_endpoint();
});