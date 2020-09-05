<?php
get_header();

/**
 * The Latest Stories page
 */

?>
<?php
    $articles_str = file_get_contents(get_template_directory() ."/mock-data/latest-stories.json");
    $articles = json_decode($articles_str, true);
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
                            <a class="read-more" href="/article/">Show stories by category</a>
                        </div>
                    </div>
                    <div class="row border-bottom-only-wrapper">
                        <div class="col-xs-12">
                            <div class="border-bottom-only"></div>
                        </div>
                    </div>
                    <div class="row category-page-category-list-wrapper category-topping-wrapper" id="articles-list">
                        <?php
                            foreach ($articles as $article) {
                                get_template_part( 'template-parts/page-stories/article-tile', null, [ "article" => $article ]); 
                            }
                        ?>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 right-section">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<?php
get_footer();