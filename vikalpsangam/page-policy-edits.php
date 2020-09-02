<?php
/**
 * The Front Page
 * @package vikalpsangam
 */

get_header();

?>

<?php
    $page_title ="PERSPECTIVES";
    $category_page_heading = "/static/media/uploads/.thumbnails/perspectives_1_1-50x50.png";
    require_once get_template_directory() .'/mock-data/perspective-articles.php';
?>

<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div class="category-page-heading">
                        <div class="category-title-link" style="background-image: url('<?=$category_page_heading?>')">
                            <?=$page_title ?>
                        </div>
                    </div>
                    <div class="row category-page-category-list-wrapper category-topping-wrapper" id="articles-list">
                        <?php foreach($perspectives_articles as $article){ ?>
                            <div class="col-xs-6 col-sm-4 category">
                                <a class="category-link-wrapper" href="<?=$article['url'] ?>">
                                    <div class="top-sub-section">
                                        <h4 style="height: 64px;"><?=$article['title']?></h4>
                                    </div>
                                    <div class="image-sub-section col-xs-12">

                                        <img class="img-responsive" src="<?=$article['image'] ?>">

                                    </div>
                                </a>
                                <div class="plain-text-sub-section">
                                    <p class="col-xs-12" style="height: 54px;"><?=$article['description']?></p>

                                    <div class="read-more-wrapper">
                                        <a class="read-more" href="<?=$article['url'] ?>">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                        <!-- TODO : Reintroduce Endless logic -->
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>

        </div>

    </div>

</div>

<?php

get_footer();