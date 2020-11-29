<?php


function vikalpsangam_scripts() {
	wp_enqueue_script( 'jquery-1.7', 'https://code.jquery.com/jquery-1.7.1.js', array(), true );	
	
	wp_enqueue_script("bootstrap/js", "https://unpkg.com/bootstrap@3.1.1/dist/js/bootstrap.js", ["jquery-1.7"]);
    wp_enqueue_style("bootstrap/css", "https://unpkg.com/bootstrap@3.1.1/dist/css/bootstrap.css");
	
	wp_enqueue_style( 'vikalpsangam-style', get_stylesheet_uri(), array(), vikalpsangam_VERSION );
	wp_style_add_data( 'vikalpsangam-style-rtl', 'rtl', 'replace');

	wp_enqueue_script( 'vikalpsangam', get_template_directory_uri() . '/js/site/index.js', ["jquery-1.7"], vikalpsangam_VERSION );
	
	if(getenv('ENABLE_BROWSERSYNC')) {
		// wp_enqueue_script( 'live-reload', "http://localhost:35729/livereload.js", [], null , $in_footer = true);
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'vikalpsangam_scripts' );