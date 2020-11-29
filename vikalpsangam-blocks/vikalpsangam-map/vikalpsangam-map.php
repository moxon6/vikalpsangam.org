<?php

function create_block_vikalpsangam_map_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	$block_script_asset_path = "$dir/build/block.asset.php";
	
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-vikalpsangam-map-block-editor',
		plugins_url( 'build/index.js' , __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_register_style(
		'create-block-vikalpsangam-map-block',
		plugins_url( "build/style-index.css", __FILE__ ),
		array(),
		filemtime( "build/style-index.css" )
	);

	$block_script_asset = require( $block_script_asset_path );
	wp_register_script(
		'vikalpsangam-map',
		plugins_url( 'build/block.js', __FILE__ ),
		["leaflet/js", "leaflet.MarkerCluster/js", 'wp-polyfill', 'wp-api-fetch' ]
	);

	// TODO: Bundle these dependencies into block
	wp_enqueue_script("leaflet/js", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js", ["jquery-1.7"]);
	wp_enqueue_style( 'leaflet/css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' );
    wp_enqueue_style('leaflet.MarkerCluster/css', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css' );
	wp_enqueue_style('leaflet.MarkerCluster.Default/css', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css' );
	wp_enqueue_script('leaflet.MarkerCluster/js', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', ["jquery-1.7", "leaflet/js"] );

	require_once "$dir/inc/render.php";

	register_block_type( 'create-block/vikalpsangam-map', array(
		'editor_script'   => 'create-block-vikalpsangam-map-block-editor',
		'editor_style'    => 'create-block-vikalpsangam-map-block-editor',
		'style'           => 'create-block-vikalpsangam-map-block',
		'script'          => 'vikalpsangam-map',
		'render_callback' => 'render_vikalpsangam_map_block',
		));
}
add_action( 'init', 'create_block_vikalpsangam_map_block_init' );

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
		$response->set_headers(array('Cache-Control' => 'max-age=3600'));
		
        return $response;
    }

	register_rest_route( 'vikalpsangam/v1', 'map', array(
		'methods'  => 'GET',
		'callback' => 'get_article_coordinates'
	));
});