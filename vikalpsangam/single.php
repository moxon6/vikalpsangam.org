<?php
get_header();
?>
<?php
    $events_str = file_get_contents(get_template_directory() ."/mock-data/past-events.json");
    $events = json_decode($events_str, true);

    $get_cat        = get_the_category();
    $first_cat      = $get_cat[0];
    $category_name  = $first_cat->cat_name;
    $category_link  = get_category_link( $first_cat->cat_ID );
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
                        <span class="author">By <?php echo get_post_meta(get_the_ID(), 'author', TRUE); ?></span>
                        <span class="text">on</span>
                        <span class="date"><?php echo get_the_date("M. d, Y") ?></span> 
                        <span class="text">in</span>
                        <a href="<?=$category_link?>"><?=$category_name?></a>
                    </div>
                    <?php get_template_part('template-parts/article/social-media'); ?>
                    <?php the_content(); ?>
                    <br><br>
                    <div id="story-tags">
                        <span class="story-by">Story Tags:</span>
                        <!-- TODO: Generate Tag Links -->
                        <!--
                            <a href="/article/tag/youth">youth</a>,
                            <a href="/article/tag/water">water</a>,
                            <a href="/article/tag/water-security">water security</a>,
                            <a href="/article/tag/waste">waste</a>,
                            <a href="/article/tag/waste-management">waste management</a>,
                            <a href="/article/tag/technology">technology</a>,
                            <a href="/article/tag/students">students</a>,
                            <a href="/article/tag/responsible">responsible</a>,
                            <a href="/article/tag/environmental-issues">environmental issues</a>,
                            <a href="/article/tag/pollution">pollution</a>
                        -->
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