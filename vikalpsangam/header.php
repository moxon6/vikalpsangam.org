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

<header class="navbar navbar-default navbar-fixed-top" role="navigation">    
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
            </a>
        </div>
        
        <?php 
        
        $items_wrap = '<ul id="%1$s" class="%2$s">%3$s';
        $items_wrap .= '
            <li>
                <form action="/" class="navbar-form navbar-search navbar-right">
                    <span class="search-box-wrapper">
                        <i class="glyphicon glyphicon-search"></i>
                        <input class="search-query form-control" placeholder="Search" type="text" name="s" value=""> 
                    </span>
                </form>
            </li>
        ';
        $items_wrap .= '
        <li>
            <a class="link-but-not-a-link" href="javascript:void(0)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </li>
        ';
        $items_wrap .= '</ul>';
        
        wp_nav_menu( array(
            'theme_location' => 'header-menu',
            'container_class' => "collapse navbar-collapse",
            'menu_class' => 'nav navbar-nav navbar-right',
            'items_wrap' => $items_wrap,
        )); ?>

    </div>
</header>
