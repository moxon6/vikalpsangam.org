<style>
    .screen-reader-text {
        display: none;
    }

    .nav-links {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        font-size: x-large;
    }
</style>

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

                    <h4>
                        <p>Found 379 results for your query: Test</p>
                    </h4>

                    <div id="search-results" class="list-group">
                        <?php

                        while ( have_posts() ) {
                            the_post();
                            ?>
                                <a class="list-group-item" href="<?php echo get_permalink() ?>">
                                    <h4><span class="list-group-item-heading"><?php echo get_the_title() ?></span></h4>
                                    <p class="list-group-item-text"><?php the_excerpt() ?></p>
                                    <span class="badge">Read More</span>
                                    <br>
                                </a>
                        <?php } ?>
                    </div>
                    <?php the_posts_navigation(); ?>
                </div>
                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
        </div>
    </div>

</div>
<?php
get_footer();