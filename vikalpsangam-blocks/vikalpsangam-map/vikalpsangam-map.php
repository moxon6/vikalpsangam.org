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


$dir = dirname( __FILE__ );
require_once "$dir/inc/endpoints.php";