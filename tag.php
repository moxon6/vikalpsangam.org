<?php
    get_header();
?>

<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">


                    <div class="category-page-heading">
                        <div class="category-title-link no-icon"><?php single_tag_title() ?></div>
                    </div>
                    <div id="infinite-scroll-content"
                        class="row category-page-category-list-wrapper category-topping-wrapper">
                        <?php
                            while (have_posts()) {
                                the_post();
                                ?>
                        <div class="col-xs-4 col-md-6 col-lg-4 pb-4">
                            <?php get_template_part( 'template-parts/common/article-tile'); ?>
                        </div>
                        <?php                            }
                        ?>
                    </div>
                </main>

                <aside class="col-sm-12 col-md-4 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>

<?php

get_footer();