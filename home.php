<?php
get_header();

/**
 * The Latest Stories page
 */
?>

<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">

                    <div class="d-flex justify-content-between mb-4">
                        <h2><?php single_post_title(); ?></h2>
                        <div>
                            <a href="/article/" class="btn btn-primary">Show stories by category</a>
                        </div>
                    </div>

                    <div id="infinite-scroll-content"
                        class="row category-page-category-list-wrapper category-topping-wrapper">
                        <?php while (have_posts()): the_post(); ?>

                        <div class="col-xs-4 col-md-6 col-lg-4 pb-4">
                            <?php get_template_part( 'template-parts/common/article-tile', null, ["category" => get_the_category()[0] ]); ?>
                        </div>

                        <?php endwhile ?>
                    </div>
                </main>
                <aside class="col-sm-12 col-md-4 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>
</div>
<?php
get_footer();