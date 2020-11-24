<?php
get_header();
?>
<?php
    $category = get_the_category()[0];
    $category_link  = get_category_link( $category_name );
?>
<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <h2>
                        <?php the_title(); ?>
                    </h2>
                        <div id="author-date-category">
                            <?php if (get_the_author()) : ?>
                                <span class="author">By <?php echo get_the_author(); ?></span>
                            <?php else: ?>
                                <span>Posted</span>
                            <?php endif ?>
                                <span class="text">on</span>          
                                <span class="date"><?php echo get_the_date("M. d, Y") ?></span> 
                            <?php if (get_category_link($category->term_id)): ?>
                                <span class="text">in</span>
                                <a href="<?php echo get_category_link($category->term_id) ?>"><?php echo $category->cat_name?></a>
                            <?php endif ?>
                        </div>
                    <div class="download-social-bar btn-toolbar" role="toolbar"></div>

                    <?php the_content(); ?>
                    <br><br>
                    <div id="story-tags">
                        <?php the_tags("Story Tags: ") ?>
                    </div>
                    <div class="space-xs"></div>
                    <div class="row border-bottom-only-wrapper default-margin-right-margin">
                        <div class="col-xs-12">
                            <div class="border-bottom-only"></div>
                        </div>
                    </div>
                    <?php get_template_part('template-parts/article/comments'); ?>
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

?>