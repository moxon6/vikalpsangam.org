<?php

function wpb_search_filter($query) {
	if ($query->is_search) {
	$query->set('post_type', 'post');
	}
	return $query;
}
add_filter('pre_get_posts','wpb_search_filter');

function admin_overrides(){ 
    wp_register_script('admin-overrides', get_template_directory_uri() .'/bundle/admin.js', ["wp-polyfill"], vikalpsangam_VERSION, true);
	wp_enqueue_script('admin-overrides');
	
	wp_enqueue_style('reorder-post-sidebar', get_template_directory_uri() . '/admin-sidebar.css');

}
add_action( 'admin_enqueue_scripts', 'admin_overrides' );