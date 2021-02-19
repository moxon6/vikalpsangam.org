<?php


function vikalpsangam_scripts() {

	wp_enqueue_script('jquery');

	wp_enqueue_style("fontawesome-5.15.2", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");

	wp_enqueue_script("bootstrap/js", "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js");

	wp_enqueue_script("autosize/js", "https://cdn.jsdelivr.net/npm/autosize@4.0.2/dist/autosize.min.js");
	wp_enqueue_script("diffhtml", "//unpkg.com/diffhtml/dist/diffhtml.min.js");
	

	wp_enqueue_style("slick/css", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
	wp_enqueue_style("slick-theme/css", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css");
	wp_enqueue_script("slick/js", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", [ "jquery" ]);	

    wp_enqueue_script("leaflet/js", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js");
	wp_enqueue_style( 'leaflet/css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' );


	wp_enqueue_script("vue-lazyload/js", "https://unpkg.com/vue-lazyload/vue-lazyload.js");
	


	wp_enqueue_script("leaflet-fullscreen/js", "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js");
	wp_enqueue_style( 'leaflet-fullscreen/css', "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css");


	wp_enqueue_script("vue/js", "//cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js");

	wp_enqueue_script("vue-leaflet/js", "//unpkg.com/vue2-leaflet", ["vue/js", "leaflet/js", "leaflet-fullscreen/js", "vue-lazyload/js"]);

	wp_enqueue_style( 'vikalpsangam-style', get_stylesheet_uri(), array(), vikalpsangam_VERSION );
	wp_style_add_data( 'vikalpsangam-style-rtl', 'rtl', 'replace');

	wp_enqueue_script( 'vikalpsangam/comments-ajax', get_template_directory_uri() . '/js/site/comments-ajax.js', ["jquery", "wp-api"], vikalpsangam_VERSION );
	wp_enqueue_script( 'vikalpsangam/page-map', get_template_directory_uri() . '/js/site/page-map.js', ["vue-leaflet/js"], vikalpsangam_VERSION );
	
	wp_enqueue_script( 'wp-api' );
	
	wp_enqueue_script( 'comment-reply' );
	
}
add_action( 'wp_enqueue_scripts', 'vikalpsangam_scripts' );