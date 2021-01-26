<!DOCTYPE html>

<!-- TODO: Multiple language support https://trello.com/c/S0ySCXwV -->
<!-- <html lang="{{ LANGUAGE_CODE }}"{% if LANGUAGE_BIDI %} dir="rtl"{% endif %}> -->
<html lang="en">

<head>

    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.png" />
    <meta charset="utf-8">
    <meta charset="utf-8">

    <?php
$tag_names = array_map(
    fn($x) => $x->name,
    wp_get_post_tags(get_the_ID())
);
?>

    <meta name="keywords" content="<?php echo implode(", ",  $tag_names) ?>" />
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta name="template" content="<?php global $template; echo basename($template); ?>" />

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top d-flex" id="vikalpsangam-navbar">

        <a class="navbar-brand" href="/"></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#vikalpsangam-navbar-collapse"
            aria-controls="vikalpsangam-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="vikalpsangam-navbar-collapse">

            <?php
                wp_nav_menu( array(
                    'container'       => false, 
                    'theme_location' => 'header-menu',
                    'id' => '',
                    'menu_class' => 'navbar-nav mr-3',
                    'add_li_class' => "nav-item",
                    'add_a_class' => 'nav-link'
                )); ?>

            <form action="/" class="form-inline search-box">
                <button class="search-box-submit-button" type="submit">
                    <i class="fas fa-search search-icon"></i>
                </button>
                <input class="search-query form-control search-box-input" placeholder="Search" type="text">
            </form>
        </div>
    </nav>