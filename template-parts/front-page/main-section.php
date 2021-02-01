<?php
    $NUMBER_OF_CAROUSEL_ITEMS = 3;
    $NUMBER_PROMOTED_ARTICLES = 3;

    $carousel_items = get_posts(array(
        'numberposts'	=> $NUMBER_OF_CAROUSEL_ITEMS,
        'post_type'		=> 'post',
        'meta_key'		=> 'add_to_carousel',
        'meta_value'	=> '1'
    ));

    $promoted_articles = get_posts(array(
        'numberposts'	=> $NUMBER_PROMOTED_ARTICLES,
        'post_type'		=> 'post',
        'meta_key'		=> 'promoted',
        'meta_value'	=> '1'
    ));

?>


<section id="main-section">
    <div class="container-fluid main-section-container">
        <div class="row ml-auto mr-auto pb-1">
            <div class="col-xl-8 col-md-12 pl-0 pr-0 pl-md-4 pr-md-4">
                <div id="vikalpsangam-org-carousel">
                    <div id="mainSlider">
                        <?php foreach ($carousel_items as $key => $post) { setup_postdata( $post );  ?>
                        <div class="slider-item">
                            <a href="#">
                                <img class="carousel-thumbnail" src="<?php the_post_thumbnail_url(); ?>">
                                <div class="slick-carousel-caption">
                                    <h4><?php the_title(); ?></h4>
                                    <?php the_excerpt(); ?>
                                </div>
                            </a>



                        </div>
                        <?php } ?>
                    </div>
                </div>

            </div>
            <div id="featured-list" class="col-xl-4 col-md-12 pt-2">

                <div class="featured-list-title-wrapper">
                    <img class="title-image" src="/wp-content/uploads/migrate/VS-Favicon.png">
                    <h3 class="highlights-title" style="margin-bottom: 0;">Highlights</h3>
                </div>
                <?php foreach ($promoted_articles as $key => $post) {
                    setup_postdata( $post );
                    get_template_part( 'template-parts/common/highlight-card');
                } ?>
            </div>
        </div>
    </div>
</section>

<script>
jQuery(window).ready(() => {
    jQuery("#mainSlider").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        mobileFirst: true,


    });
});
</script>