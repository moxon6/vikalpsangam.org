<?php
/**
 * vikalpsangam functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package vikalpsangam
 */

include 'version.php';

$composer_autoload = __DIR__ . '/vendor/autoload.php';

if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

Timber::$dirname = array( 'templates', 'views' );
Timber::$autoescape = false;

function buffer($fn) {
	ob_start();
	$fn();
	return ob_get_clean();
}

class VikalpsangamOrgSite extends Timber\Site {
	public function __construct() {
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		parent::__construct();
	}

	private function get_template_image_url($image_url) {
        return get_bloginfo('template_url') . $image_url . "?v=" . vikalpsangam_VERSION;
	}

	private function get_tags_from_post($posts) {
        $ids = [];
        $tags = [];
        foreach($posts as $post) {
            $post_tags = get_the_tags($post->ID);
            foreach($post_tags as $tag) {
                if (!in_array($tag->term_id, $ids)) {
                    $ids[] = $tag->term_id;
                    $tags[] = $tag;
                }
            }
        }
        return $tags;
    }
	
	private function setup_footer_context($context) {
		$context['footer_logo'] = $this->get_template_image_url("/images/footer/site-logo.png");
		
		$context['footer_logos'] = [
			[ "url" => "http://www.shikshantar.org", "image" => $this->get_template_image_url("/images/logos/shikshantar.png")],
			[ "url" => "http://www.kalpavriksh.org", "image" => $this->get_template_image_url("/images/logos/kalpavriksh.png")],
			[ "url" => "http://www.ddsindia.com", "image" => $this->get_template_image_url("/images/logos/ddsindia.png")],
			[ "url" => "http://www.bhoomicollege.org", "image" => $this->get_template_image_url("/images/logos/bhoomicollege.png")]
		];
		
		$context["social_links"] = [
			["url" => "https://twitter.com/VikalpSangam", "image" => $this->get_template_image_url("/images/social/twitter.png")],
			["url" => "https://www.facebook.com/VikalpSangam", "image" => $this->get_template_image_url("/images/social/facebook.png")],
			["url" => "https://www.instagram.com/vikalpsangam", "image" => $this->get_template_image_url("/images/social/instagram.png")]
		];

		$context["footer_menus"] = [
			new \Timber\Menu( 'footer-menu-1' ),
			new \Timber\Menu( 'footer-menu-2' ),
			new \Timber\Menu( 'footer-menu-3' )
		];
		
		$context["MAILCHIMP_SUBMIT_URL"] = "//vikalpsangam.us9.list-manage.com/subscribe/post?u=16f6762000d0db3e3e5190bf6&amp;id=4bd0241c3a";

		return $context;
	}

	private function setup_header_context($context) {
		$context["header_menu"] = new \Timber\Menu( 'header-menu' );
		return $context;
	}

	private function setup_common_context($context) {
		$context["post_categories"] = Timber::get_terms('category', [
			'hide_empty' => 1,
			"exclude" => get_cat_ID("Perspectives")
		]);

		return $context;
	}

	private function setup_sidebar_context($context) {
		$context["sidebar_recent_activity"] = Timber::get_posts(array(
			'numberposts' => 5,
			'post_type'	=> 'post',
			"orderby" => "date",
			"order" => "DSC"
		));

		$context["sidebar_tag_cloud"] = $this->get_tags_from_post(get_posts(array(
			'numberposts' => 10,
			'post_type'	=> 'post',
			"orderby" => "date",
			"order" => "DSC"
		)));
		
		return $context;
	}
	
	public function add_to_context( $context ) {
		$context = $this->setup_footer_context($context);
		$context = $this->setup_header_context($context);
		$context = $this->setup_sidebar_context($context);
		$context = $this->setup_common_context($context);
		return $context;
	}

	function add_to_twig( $twig ) {
		$twig->addFilter( new Timber\Twig_Filter( 'tagWeight', function ($count) {
			if ($count > 150) {
				return 3;
			}
			if ($count > 50) {
				return 2;
			}
			return 1;
		}));
		return $twig;
	}	
}

new VikalpsangamOrgSite();


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

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		add_theme_support( 'wp-block-styles' );

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
				'social-links' => esc_html__("Social Links Menu", "vikalpsangam"),
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
	}
endif;
add_action( 'after_setup_theme', 'vikalpsangam_setup' );

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wlwmanifest_link');

add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

function special_nav_class ($classes, $item) {
  if (
		in_array('current-menu-item', $classes) or 
		in_array('current-page-ancestor', $classes) or
		in_array('current-post-ancestor', $classes) or
		$item->post_name == "stories" && ( 
		  (
			  (is_single() && !has_category("policy-edits")) ||
			  is_tag() || 
			  (is_category() && !is_category("policy-edits"))
		  )
		)
    )
	{
		$classes[] = 'active';
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

	$image = get_field('image', $category);
	return  esc_url($image['url']);
}

function filter_excerpt($excerpt) {
	return wp_trim_words($excerpt, apply_filters("excerpt_length", 20));
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

function setup_infinite_scroll() {
    add_theme_support( 'infinite-scroll', array(
        'container' => 'infinite-scroll-content',
        'render'    => 'infinite_scroll_render',
        'wrapper'   => false,
		'type'      => 'click',
		'posts_per_page' => 9,
    ) );
}

add_action('after_setup_theme', 'setup_infinite_scroll');

function infinite_scroll_render() {
	$context = [
		'posts' => Timber::get_posts(),
	];
	Timber::render('partials/article-tile-loop.twig', $context);
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