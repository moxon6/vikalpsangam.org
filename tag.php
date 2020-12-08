<?php
    get_header();
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
                        <div class="category-title-link no-icon"><?php single_tag_title() ?></div>
                    </div>
                    <div id="infinite-scroll-content" class="row category-page-category-list-wrapper category-topping-wrapper">                        
                        <?php
                            while (have_posts()) {
                                the_post();
                                get_template_part( 'template-parts/common/article-tile');
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

<?php

get_footer();