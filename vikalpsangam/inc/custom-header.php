<?php
/**
 * Sample implementation of the Custom Header feature
 *
 * You can add an optional custom header image to header.php like so ...
 *
	<?php the_header_image_tag(); ?>
 *
 * @link https://developer.wordpress.org/themes/functionality/custom-headers/
 *
 * @package vikalpsangam
 */

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses vikalpsangam_header_style()
 */
function vikalpsangam_custom_header_setup() {
	add_theme_support(
		'custom-header',
		apply_filters(
			'vikalpsangam_custom_header_args',
			array(
				'default-image'      => '',
				'default-text-color' => '000000',
				'width'              => 1000,
				'height'             => 250,
				'flex-height'        => true,
				'wp-head-callback'   => 'vikalpsangam_header_style',
			)
		)
	);
}
add_action( 'after_setup_theme', 'vikalpsangam_custom_header_setup' );

if ( ! function_exists( 'vikalpsangam_header_style' ) ) :
	/**
	 * Styles the header image and text displayed on the blog.
	 *
	 * @see vikalpsangam_custom_header_setup().
	 */
	function vikalpsangam_header_style() {
		// If we get this far, we have custom styles. Let's do this.
	}
endif;
