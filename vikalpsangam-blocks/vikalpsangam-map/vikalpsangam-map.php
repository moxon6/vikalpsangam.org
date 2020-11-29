<?php

function create_block_vikalpsangam_map_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	$block_script_asset_path = "$dir/build/block.asset.php";
	
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-vikalpsangam-map-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/style-index.css';
	wp_register_style(
		'create-block-vikalpsangam-map-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-vikalpsangam-map-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$block_js     = 'build/block.js';
	$block_script_asset = require( $block_script_asset_path );
	wp_register_script(
		'vikalpsangam-map',
		plugins_url( $block_js, __FILE__ ),
		["leaflet/js", "leaflet.MarkerCluster/js", 'wp-polyfill', 'wp-api-fetch' ]
	);

	// TODO: Bundle these dependencies into block
	wp_enqueue_script("leaflet/js", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js", ["jquery-1.7"]);
	wp_enqueue_style( 'leaflet/css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' );
    wp_enqueue_style('leaflet.MarkerCluster/css', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css' );
	wp_enqueue_style('leaflet.MarkerCluster.Default/css', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css' );
	wp_enqueue_script('leaflet.MarkerCluster/js', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', ["jquery-1.7", "leaflet/js"] );

	
	error_reporting(E_ALL);
	error_reporting(-1);
	ini_set('error_reporting', E_ALL);

	register_block_type( 'create-block/vikalpsangam-map', array(
		'editor_script'   => 'create-block-vikalpsangam-map-block-editor',
		'editor_style'    => 'create-block-vikalpsangam-map-block-editor',
		'style'           => 'create-block-vikalpsangam-map-block',
		'script'          => 'vikalpsangam-map',
		'render_callback' => 'render_vikalpsangam_map_block',
		));

	function render_vikalpsangam_map_block() {
		return '<div id="large-map" class="vikalp-leaflet-block">
			<div class="loader" role="status">
			</div>
		</div>';
	}


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