<?php
/**
 * vikalpsangam functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package vikalpsangam
 */

if ( ! defined( 'vikalpsangam_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'vikalpsangam_VERSION', '1.0.0' );
}

if ( ! function_exists( 'vikalpsangam_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function vikalpsangam_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on vikalpsangam, use a find and replace
		 * to change 'vikalpsangam' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'vikalpsangam', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'header-menu' => esc_html__( 'Primary', 'vikalpsangam' ),
				'footer-menu-1' => esc_html__("Footer 1", "vikalpsangam"),
				'footer-menu-2' => esc_html__("Footer 2", "vikalpsangam"),
				'footer-menu-3' => esc_html__("Footer 3", "vikalpsangam"),
			)
		);

		function add_additional_class_on_li($classes, $item, $args) {
			if(isset($args->add_li_class)) {
				$classes[] = $args->add_li_class;
			}
			return $classes;
		}
		add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);
		
		function add_additional_class_on_a($attrs, $item, $args) {
			if(isset($args->add_a_class)) {
				$attrs['class'] = $args->add_a_class;
			}
			return $attrs;
		}
		add_filter('nav_menu_link_attributes', 'add_additional_class_on_a', 1, 3);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'vikalpsangam_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'vikalpsangam_setup' );



function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'wc-block-style' ); // Remove WooCommerce block CSS
} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wlwmanifest_link');

add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

function special_nav_class ($classes, $item) {
  if (in_array('current-menu-item', $classes) or in_array('current-page-ancestor', $classes) ){
    $classes[] = 'active ';
  }
  return $classes;
}

function remove_tagline($title)
{
    if(isset($title['tagline']))
    {
        unset($title['tagline']);
    }

    return $title;
}
add_filter('document_title_parts', 'remove_tagline');

//Remove the REST API endpoint.
remove_action('rest_api_init', 'wp_oembed_register_route');
 
// Turn off oEmbed auto discovery.
add_filter( 'embed_oembed_discover', '__return_false' );
 
//Don't filter oEmbed results.
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
 
//Remove oEmbed discovery links.
remove_action('wp_head', 'wp_oembed_add_discovery_links');
 
//Remove oEmbed JavaScript from the front-end and back-end.
remove_action('wp_head', 'wp_oembed_add_host_js');

function remove_recent_comments_style() {
    global $wp_widget_factory;
    remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
}
add_action('widgets_init', 'remove_recent_comments_style');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function vikalpsangam_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'vikalpsangam_content_width', 640 );
}
add_action( 'after_setup_theme', 'vikalpsangam_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function vikalpsangam_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'vikalpsangam' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'vikalpsangam' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'vikalpsangam_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function vikalpsangam_scripts() {
	wp_enqueue_style( 'vikalpsangam-style', get_stylesheet_uri(), array() );
	wp_style_add_data( 'vikalpsangam-style', 'rtl', 'replace' );

	wp_enqueue_script( 'jq', 'https://code.jquery.com/jquery-1.7.1.js', array(), true );	
	wp_enqueue_script( 'app', get_template_directory_uri() . '/js/app.js', array(), true );	
	wp_enqueue_script( "unslider", get_template_directory_uri().'/js-vendor/unslider.min.js', [ "jq" ] , true);
	wp_enqueue_script( "carousel", get_template_directory_uri().'/js-vendor/carousel.js', [ "unslider" ] , true);
	wp_enqueue_script( "bootstrap", get_template_directory_uri().'/js-vendor/bootstrap.js', [ "carousel" ] , true);
	wp_enqueue_script( "modern-business", get_template_directory_uri().'/js-vendor/modern-business.js', [ "carousel", "bootstrap" ] , true);
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_enqueue_style( 'leaflet-css' , 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' );
	wp_enqueue_style( 'leaflet-marker-cluster-css' , 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css' );
	wp_enqueue_style( 'leaflet-marker-default-cluster-css' , 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css' );

	wp_enqueue_script( 'leaflet-js' , 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js' );
	wp_enqueue_script( 'leaflet-marker-cluster-js' , 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js' );
}
add_action( 'wp_enqueue_scripts', 'vikalpsangam_scripts' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';


function add_extra_fields_to_category($taxonomy_name){
    ?>
    <div class="form-field">
        <label for="short-description">Short Description</label>
        <input type="text" name="short-description" id="short-description"/>
    </div>
    <?php
}

add_action('category_add_form_fields','add_extra_fields_to_category');


function save_extra_taxonomy_fields($term_id){
    $term_item = get_term($term_id,'category');
    $term_slug = $term_item->slug;
	$term_category_text = sanitize_text_field($_POST['short-description']);
	update_option('term_category_text_' . $term_slug, $term_category_text); 
}

add_action('create_category','save_extra_taxonomy_fields');

function edit_extra_fields_for_category($term){

    //collect the term slug
    $term_slug = $term->slug;

    //collect our saved term field information
    $term_category_text = get_option('term_category_text_' . $term_slug); 
    $term_category_textarea = get_option('term_category_textarea_' . $term_slug); 
    $term_category_select = get_option('term_category_select_' . $term_slug); 
    $term_category_radio = get_option('term_category_radio_' . $term_slug); 

    //output our additional fields?>
    <tr class="form-field">
        <th valign="top" scope="row">
            <label for="short-description">Short Description</label>
        </th>
        <td>
            <input type="text" name="short-description" id="short-description" value="<?php echo $term_category_text; ?>"/>
        </td>
    </tr>
    <?php
}

add_action('category_edit_form_fields','edit_extra_fields_for_category');

add_action('edit_category','save_extra_taxonomy_fields');


function admin_overrides(){ 
    wp_register_script('override-slug-blur', get_template_directory_uri() .'/js/admin/override-slug-blur.js', null, '1.0.0', true);
	wp_enqueue_script('override-slug-blur');
	
	wp_enqueue_style('reorder-post-sidebar', get_template_directory_uri() . '/admin-sidebar.css');

}
add_action( 'admin_enqueue_scripts', 'admin_overrides' );


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

add_action('rest_api_init', function () {
	register_rest_route( 'vikalpsangam/v1', 'map', array(
		'methods'  => 'GET',
		'callback' => 'get_article_coordinates'
	));
});


function get_category_image($category) {
	$category_image = z_taxonomy_image_url($category->term_id);
	if (!strpos($category_image, "Favicon")) {
		// TODO : Optimise thumbnails post phase 1
		// $category_image = str_replace(".", "-150x150.", $category_image); // Postfix -150x150 to the image
	}
	return $category_image;
}

function filter_excerpt($excerpt) {
	return wp_trim_words($excerpt, apply_filters("excerpt_length", 20));
}

class Categories {
        
	function __construct() {
		$this->unusedCategories = array_map(
			fn($category) => $category->term_id,
			array_values(get_categories())
		);
		$this->usedCategories = [];
		$this->usedPosts = [];
	}

	function getRelevantCategory($post) {        
		return wp_get_post_categories(
			$post -> ID,
			[ 
				'fields' => 'all',
				"exclude" => $this->usedCategories
			]
		)[0];
	}

	function getLatestRelevantPost() {
		$post = get_posts(array(
			'numberposts'	=> 1,
			'post_type'		=> 'post',
			"orderby"   => "date",
			"order"     => "DSC",
			'category__in'	=> $this->unusedCategories,
			"exclude" => $this->usedPosts
		))[0];

		$this->usedPosts[] = $post->ID;

		$category = $this->getRelevantCategory($post);

		$this->unusedCategories = array_filter($this->unusedCategories, fn($cat) => $cat != $category->term_id);
		$this->usedCategories[] = $category->term_id;

		return [
			"post" => $post,
			"category" => $category
		];
	}

	function getCategoryPosts($n) {
		return array_map(
			fn($i) => $this->getLatestRelevantPost(),
			range(0, $n - 1)
		);
	}
}

function custom_rewrite_rule() {
	add_rewrite_rule( '^resources\/(.*)\/?', 'index.php?pagename=resources&resource=$matches[1]', 'top' );
}
add_action('init', 'custom_rewrite_rule', 10, 0);

flush_rewrite_rules();

function register_custom_query_vars( $vars ) {
	$vars[] = "resource";
    return $vars;
}
add_filter( 'query_vars', 'register_custom_query_vars', 1 );

//Exclude pages from WordPress Search
if (!is_admin()) {
	function wpb_search_filter($query) {
	if ($query->is_search) {
	$query->set('post_type', 'post');
	}
	return $query;
	}
	add_filter('pre_get_posts','wpb_search_filter');
}

add_filter( 'home_url', function( $url ) {
	if ($_GET["local"]) {
		echo "testing";
		$url = str_replace( 'localhost:8000', 'wordpress', $url );
	}
	
	return $url;
});

function setup_infinite_scroll() {
    add_theme_support( 'infinite-scroll', array(
        'container' => 'infinite-scroll-content',
        'render'    => 'infinite_scroll_render',
        'wrapper'   => false,
		'type'      => 'click',
		'posts_per_page' => 6,
    ) );
}

add_action('after_setup_theme', 'setup_infinite_scroll');

function infinite_scroll_render() {
    while (have_posts()) {
		the_post();
		get_template_part('template-parts/common/article-tile');
    }
}

function be_exclude_category_from_blog( $query ) {
	if ( $query->is_main_query() && !$query->is_admin()) {
		if ($query->query_vars["pagename"] == "stories") {
			unset($query->query_vars["page"]);
			unset($query->query_vars["pagename"]);
			unset($query->queried_object);
	
			$query->is_archive = true;
			$query->is_category = true;
			$query->is_page = false;
			$query->is_singular= false;	
		}
	}
}
add_action( 'pre_get_posts', 'be_exclude_category_from_blog' );

