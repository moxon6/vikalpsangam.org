<?php


function vikalpsangam_scripts() {

	wp_enqueue_style("fontawesome-5.15.2", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
	
	wp_enqueue_script("bootstrap/js", "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js");
    wp_enqueue_style("bootstrap/css", "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css");
	
    wp_enqueue_script("leaflet/js", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js");
	wp_enqueue_style( 'leaflet/css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' );
    
    wp_enqueue_style('leaflet.MarkerCluster/css', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css' );
	wp_enqueue_style('leaflet.MarkerCluster.Default/css', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css' );
	wp_enqueue_script('leaflet.MarkerCluster/js', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', ["jquery-3.5.1", "leaflet/js"] );
	
	wp_enqueue_style( 'vikalpsangam-style', get_stylesheet_uri(), array(), vikalpsangam_VERSION );
	wp_style_add_data( 'vikalpsangam-style-rtl', 'rtl', 'replace');

	wp_enqueue_script( 'vikalpsangam', get_template_directory_uri() . '/js/site/index.js', ["jquery-3.5.1", "leaflet/js"], vikalpsangam_VERSION );
	
	if(getenv('ENABLE_BROWSERSYNC')) {
		wp_enqueue_script( 'browser-sync', "http://localhost:3000/browser-sync/browser-sync-client.js", [], null , $in_footer = true);
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'vikalpsangam_scripts' );