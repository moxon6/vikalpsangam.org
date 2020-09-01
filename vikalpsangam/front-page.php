<?php
/**
 * The Front Page
 * @package vikalpsangam
 */

get_header();

?>
<div id="content">
<?php
    $article_content = [
        [
            "title" => "GANDHI AND GREEN DEMOCRACY: THE EVOLUTION OF ECO-SWARAJ",
            "featured_image" => "/wp-content/themes/vikalpsangam/images/carousel_logo_temp.png",
            "description" => "",
            "absolute_url" => "/article/1",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png",
            "category_title" => "Environment And Ecology",
            "category_image" => "/wp-content/themes/vikalpsangam/images/category_temp.png",
            "category_thumbnail" => "/wp-content/themes/vikalpsangam/images/category_thumbnail_temp.png"
        ],
        [
            "title" => "THE ECOSYSTEM OF LEARNING",
            "featured_image" => "/wp-content/themes/vikalpsangam/images/carousel_logo_temp.png",
            "description" => "description-2-truncate-to-256",
            "absolute_url" => "/article/2",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png",
            "category_title" => "Knowledge And Media",
            "category_image" => "/wp-content/themes/vikalpsangam/images/category_temp.png",
            "category_thumbnail" => "/wp-content/themes/vikalpsangam/images/category_thumbnail_temp.png"
        ],
        [
            "title" => "CITIZENS AND PARLIAMENTARIANS DIALOGUE ON THE WAY FORWARD",
            "featured_image" => "",
            "description" => "description-3-truncate-to-256",
            "absolute_url" => "/article/3",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png",
            "category_title" => "Politics",
            "category_image" => "/wp-content/themes/vikalpsangam/images/category_temp.png",
            "category_thumbnail" => "/wp-content/themes/vikalpsangam/images/category_thumbnail_temp.png"
        ]
    ];
?>

<section class="top-carousel-wrapper">
    <div class="row no-right-margin">
        <div class="col-md-8 col-xs-12">
            <?php get_template_part( 'template-parts/front-page/carousel', null, [ "article_content" => $article_content ]); ?>
        </div>
        <div class="col-md-4 col-xs-12 featured-list">
            <?php get_template_part( 'template-parts/front-page/highlights', null, [ "article_content" => $article_content ]); ?>
        </div>
    </div>
</section>

<section class="category-section">
    <?php get_template_part( 'template-parts/front-page/categories', null, [ "article_content" => $article_content ]); ?>
</section>


<section class="about_section">
    <?php get_template_part( 'template-parts/front-page/about'); ?>
</section>
<!-- End of content -->
</div>
<?php

get_footer();
