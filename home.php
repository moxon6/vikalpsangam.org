<?php
get_header();

/**
 * The Latest Stories page
 */
?>

<div id="page">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">

                    <div class="row top-title">
                        <div class="col-xs-7 heading">
                            <h2><?php single_post_title(); ?></h2>
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
                    <div id="infinite-scroll-content"
                        class="row category-page-category-list-wrapper category-topping-wrapper">
                        <?php
                            while (have_posts()) {
                                the_post();
                                get_template_part( 'template-parts/page-stories/article-tile');
                            }
                        ?>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_sidebar() ?>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<?php
get_footer();