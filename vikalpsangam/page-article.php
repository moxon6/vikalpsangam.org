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

    $stories = file_get_contents(get_template_directory() ."/mock-data/stories.json");
    $categories = json_decode($stories, true);
    $articles = $categories[0]['articles'];
?>

<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 right-border-separator left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div class="row top-title">
                        <div class="col-xs-7 heading">
                            <h2><?=the_title(); ?></h2>
                        </div>
                        <div class="col-xs-5 link">
                            <a class="read-more" href="/stories/">Show all latest stories</a>
                        </div>
                    </div>

                    <div class="row border-bottom-only-wrapper">
                        <div class="col-xs-12">
                            <div class="border-bottom-only"></div>
                        </div>
                    </div>
                    <section id="storypage-categories" class="row">
                        <?php foreach($categories as $category){?>

                            <div class="col-xs-12 category-topping-wrapper">
                                <div class="category-page-heading">
                                    <a class="category-title-link"
                                    title="Case studies commissioned by Vikalp Sangam or other processes"
                                    style="background-image: url('<?=$category['image']?>')"
                                    href="<?=$category['url'] ?>">
                                    <?=$category['title'] ?>
                                </a>
                            </div>
                            
                            <div class="row category-page-category-list-wrapper">
                                <?php foreach($category['articles'] as $article){
                                    get_template_part( 'template-parts/common/article-tile', null, [ "article" => $article ]);
                                } ?>
                                </div>
                                
                                <div class="read-more-wrapper">
                                    <a class="read-more" href="<?=$category['url'] ?>"> See all stories </a>
                                </div>
                            </div>
                        <?php } ?>
                    </section>
                </div>
                <div class="col-sm-12 col-md-3 right-section">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>

        </div>

    </div>

</div>

<?php

get_footer();