<?php
/**
 * vikalpsangam functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package vikalpsangam
 */

include 'version.php';

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
require get_template_directory() . '/inc/dependencies.php';

require get_template_directory() . '/inc/functions/page-stories.php';

if (is_admin()) {
	require get_template_directory() . '/inc/admin/admin.php';
}

require get_template_directory() . '/inc/endpoints.php';

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

function jetpackme_more_related_posts( $options ) {
    $options['size'] = 4;
    return $options;
}
add_filter( 'jetpack_relatedposts_filter_options', 'jetpackme_more_related_posts' );

function jetpackme_filter_exclude_policy_edits( $filters ) {
    $filters[] = array(
        'not' => array(
            'term' => array(
                'category.slug' => 'policy-edits',
            ),
        ),
    );
 
    return $filters;
}
add_filter( 'jetpack_relatedposts_filter_filters', 'jetpackme_filter_exclude_policy_edits' );

function jetpackme_filter_require_category( $filters ) {
    $filters[] = array(
        'exists' => array(
            'field' => 'category.slug',
        ),
    );
 
    return $filters;
}
add_filter( 'jetpack_relatedposts_filter_filters', 'jetpackme_filter_require_category' );