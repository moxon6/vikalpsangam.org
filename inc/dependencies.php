<?php


function vikalpsangam_scripts() {
	$build_time = filemtime( get_template_directory().'/style.css');

	wp_enqueue_script('jquery');

	wp_enqueue_style("fontawesome-5.15.2", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");

	wp_enqueue_script("diffhtml", "//unpkg.com/diffhtml/dist/diffhtml.min.js");

	wp_enqueue_style( 'vikalpsangam-style', get_stylesheet_uri(), array(), $build_time);
	wp_style_add_data( 'vikalpsangam-style-rtl', 'rtl', 'replace');
		
	wp_enqueue_script( 'wp-api' );
	
	wp_enqueue_script( 'comment-reply' );
}
add_action( 'wp_enqueue_scripts', 'vikalpsangam_scripts' );

function vikalpsangam_scripts_admin(){ 
    wp_enqueue_script('admin-overrides', get_template_directory_uri() .'/admin.js', []);
	wp_enqueue_style('reorder-post-sidebar', get_template_directory_uri() . '/admin-sidebar.css');
}
add_action( 'admin_enqueue_scripts', 'vikalpsangam_scripts_admin' );