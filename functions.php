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

Timber::$autoescape = false;

function buffer($fn) {
    ob_start();
    $fn();
    return ob_get_clean();
}

add_filter('wp_generate_tag_cloud_data', function ($tags_data) {
    foreach ($tags_data as $key => $tag) {
        $weight = floor($tag["real_count"] / 50);
        $tags_data[$key]['class'] .=  " tag-weight-$weight";
    }            
    return $tags_data;
});

class VikalpsangamOrgSite extends Timber\Site {
    static $socialIcons = "<social-icons></social-icons>";
    static $searchBar = "<search-bar></search-bar>";
    static $center_open = "<div class=\"mega-toggle-blocks-center\">";
    static $center_close = "</div>";

    public function __construct() {
        add_filter( 'timber/context', array( $this, 'add_to_context' ) );
        
        parent::__construct();
    }

    private function get_template_image_url($image_url) {
        return get_bloginfo('template_url') . $image_url . "?v=" . vikalpsangam_VERSION;
    }
    
    private function setup_footer_context($context) {
        $context['footer_logo'] = $this->get_template_image_url("/images/logo-transparent.png");

        $context["footer_menus"] = [
            new \Timber\Menu( 'footer-menu-1' ),
            new \Timber\Menu( 'footer-menu-2' ),
            new \Timber\Menu( 'footer-menu-3' )
        ];
        
        $context["MAILCHIMP_SUBMIT_URL"] = "//vikalpsangam.us9.list-manage.com/subscribe/post?u=16f6762000d0db3e3e5190bf6&amp;id=4bd0241c3a";

        return $context;
    }

    private function setup_common_context($context) {
        $context["post_categories"] = Timber::get_terms('category', [
            'hide_empty' => 1,
            "exclude" => [
                get_cat_ID("Perspectives"),
                get_cat_ID("Uncategorised"),
                get_cat_ID("Uncategorized"),
            ]
        ]);

        return $context;
    }
    
    public function add_to_context( $context ) {
        $context = $this->setup_footer_context($context);

        add_filter( 'timber/twig', function( \Twig_Environment $twig ) {
            $twig->addFunction(new \Twig\TwigFunction(
                'get_sidebar', 
                function() {
                    return Timber::get_widgets('sidebar-1');
                }
            ));

            $twig->addFunction(new \Twig\TwigFunction(
                'get_social_icons', 
                function() {
                    return Timber::get_widgets('social-icons');
                }
            ));

            return $twig;
        } );

        add_filter( 'timber/twig', function( \Twig_Environment $twig ) {
            $twig->addFunction(new \Twig\TwigFunction(
                'get_secondary_header', 
                function() {
                    $navbar = buffer(function() {
                        wp_nav_menu(
                            [
                                "theme_location" => 'header-menu-secondary'
                            ]
                        );
                    });
                    return preg_replace("/<\/ul><\/div>/", self::$socialIcons."</ul></div>", $navbar, 1);
                }
            ));
            return $twig;
        });

        add_filter( 'timber/twig', function( \Twig_Environment $twig ) {
            $twig->addFunction(new \Twig\TwigFunction(
                'get_primary_header', 
                function() {
                    $navbar = buffer(function() {
                        wp_nav_menu(
                            [
                                "theme_location" => 'header-menu'
                            ]
                        );
                    });
                    $logo = "<logo></logo>";
                    $logo_mobile = "<logo-primary></logo-primary>";
                    $navbar = str_replace(self::$center_open . self::$center_close, self::$center_open . $logo . self::$center_close, $navbar);
                    $navbar = preg_replace("/<li/",  $logo_mobile . self::$socialIcons . "<li", $navbar, 1);
                    $navbar = preg_replace("/<\/ul><\/nav>/", self::$searchBar."</ul></nav>", $navbar, 1);
                    return $navbar;
                }
            ));
            return $twig;
        } );

        $context = $this->setup_common_context($context);
        return $context;
    }
}

new VikalpsangamOrgSite();

add_filter( 'template_include', 'get_password_protected_template', 99 );
function get_password_protected_template( $template ) {
    global $post;
    if ( ! empty( $post ) && post_password_required( $post->ID ) ) {
        $template = locate_template( ['password-protected.php' ] );
    }
    return $template;
};

function vikalpsangam_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'post-thumbnails' );

    register_nav_menus(
        array(
            'header-menu' => esc_html__( 'Primary', 'vikalpsangam' ),
            'header-menu-secondary' => esc_html__( 'Secondary', 'vikalpsangam' ),
            'footer-menu-1' => esc_html__("Footer 1", "vikalpsangam"),
            'footer-menu-2' => esc_html__("Footer 2", "vikalpsangam"),
            'footer-menu-3' => esc_html__("Footer 3", "vikalpsangam"),
        )
    );

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

add_action( 'after_setup_theme', 'vikalpsangam_setup' );

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wlwmanifest_link');

// TODO: Fix Perspectives active nav classes

 
// Turn off oEmbed auto discovery.
add_filter( 'embed_oembed_discover', '__return_false' );
 
//Don't filter oEmbed results.
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
 
//Remove oEmbed discovery links.
remove_action('wp_head', 'wp_oembed_add_discovery_links');
 
//Remove oEmbed JavaScript from the front-end and back-end.
remove_action('wp_head', 'wp_oembed_add_host_js');

function vikalpsangam_widgets_init() {
    register_sidebar(
        array(
            'name'          => 'The Main Sidebar',
            'id'            => 'sidebar-1',
            'description'   => 'Add widgets here.'
        )
    );

    register_sidebar(
        array(
            'name'          => 'Social Icons Menu',
            'id'            => 'social-icons',
            'description'   => 'Add social icons.'
        )
    );
}
add_action( 'widgets_init', 'vikalpsangam_widgets_init' );


require get_template_directory() . '/inc/dependencies.php';

require get_template_directory() . '/inc/perspectives-patches.php';

if (!is_admin()) {
    function wpb_search_filter($query) {
        if ($query->is_search && !isset($query->query["post_type"]) ) {
        $query->set('post_type', 'post');
        }
        return $query;
    }
    add_filter('pre_get_posts','wpb_search_filter');    
}

require get_template_directory() . '/inc/endpoints.php';


add_filter('comment_form_field_url', '__return_false');

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

require get_template_directory() . '/inc/jetpack.php';

$excluded_categories = [
    get_cat_ID("Perspectives"),
    get_cat_ID("Uncategorised"),
    get_cat_ID("Uncategorized")
];

function exclude_categories_related_posts_widget($args, $instance) {
    global $excluded_categories;
    $args['category__not_in'] = $excluded_categories;
    $args['has_password'] = false;
    return $args;
}
add_filter('widget_posts_args', 'exclude_categories_related_posts_widget', 1, 2);

function exclude_password_protected_posts( $where = '' ) {
    if (!is_single() && !is_admin()) {
        $where .= " AND post_password = ''";
    }
    return $where;
}
add_filter( 'posts_where', 'exclude_password_protected_posts' );