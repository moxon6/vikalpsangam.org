<!DOCTYPE html>

<!-- TODO: Generate LANGUAGE_CODE from wordpress -->
<!-- <html lang="{{ LANGUAGE_CODE }}"{% if LANGUAGE_BIDI %} dir="rtl"{% endif %}> -->
<html lang="en">

<head>

<!-- TODO: Generate Title from wordpress -->
<link rel="shortcut icon" href="{% static "img/favicon.png?v=4" %}">
<meta charset="utf-8">

<!-- TODO : Generate Meta tags based on WP -->
<meta charset="utf-8">
<meta name="keywords" content="comunity conservation, civil society initiative, energy, education, economy, ecology, settlements, rural, organic-farming, sustainability, environment, environmental issues, Bhoomi, livelihoods, case studies, alternative learning, social issues, society, seeds, Kalpavriksh, Shikshantar, Deccan Development Society, Bhoomi College">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">


<!-- 
<script src="{% static "mezzanine/js/"|add:settings.JQUERY_FILENAME %}"></script>
<script src="{% static "js/bootstrap.min.js" %}"></script>

<script src="{{ STATIC_URL }}endless_pagination/js/endless-pagination.js"></script>

<script src="{% static "js/app.js" %}"></script>
<script src="{% static "js/modern-business.js" %}"></script>   
-->

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'vikalpsangam' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$vikalpsangam_description = get_bloginfo( 'description', 'display' );
			if ( $vikalpsangam_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $vikalpsangam_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'vikalpsangam' ); ?></button>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
