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
    global $wp_query;
    get_header(); 
?>
<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">


                    <h4>
                        <p>Found <?php echo $wp_query->found_posts ?> results for your query: <?php echo get_search_query(); ?></p>
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
                <aside class="col-sm-12 col-md-4 right-section left-border-separator">
                    <?php get_sidebar() ?>
                </div>
        </div>
    </div>

</div>
<?php
get_footer();