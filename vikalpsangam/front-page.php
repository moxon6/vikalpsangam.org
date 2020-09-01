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
            "title" => "TEMP: TOWARDS NETWORKING AND ACTION FOR LOCAL SELF-RELIANCE AND DIGNIFIED LIVELIHOODS",
            "featured_image" => "/wp-content/themes/vikalpsangam/images/carousel_logo_temp.png",
            "description" => "",
            "absolute_url" => "/article/1",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png"
        ],
        [
            "title" => "Title 2",
            "featured_image" => "/wp-content/themes/vikalpsangam/images/carousel_logo_temp.png",
            "description" => "description-2-truncate-to-256",
            "absolute_url" => "/article/2",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png"
        ],
        [
            "title" => "Title 3",
            "featured_image" => "",
            "description" => "description-3-truncate-to-256",
            "absolute_url" => "/article/3",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png"
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

</div>
<?php

get_footer();
