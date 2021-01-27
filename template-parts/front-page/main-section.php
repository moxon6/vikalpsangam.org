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
        <div class="row ml-auto mr-auto pt-4 pb-4">
            <div class="col-xl-8 col-md-12">

                <div id="vikalpsangam-org-carousel" class="carousel slide front-page-carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#vikalpsangam-org-carousel" data-slide-to="0" class=""></li>
                        <li data-target="#vikalpsangam-org-carousel" data-slide-to="1" class="active"></li>
                        <li data-target="#vikalpsangam-org-carousel" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner">

                        <?php foreach ($carousel_items as $key => $post) { setup_postdata( $post );  ?>
                        <div class="carousel-item <?=($key == 0 ? "active" : "") ?>">
                            <img class="d-block w-100 carousel-image" alt="First slide [800x400]"
                                src="<?php the_post_thumbnail_url(); ?>" data-holder-rendered="true">
                        </div>

                        <?php } ?>

                    </div>
                    <a class="carousel-control-prev" href="#vikalpsangam-org-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#vikalpsangam-org-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div id="featured-list" class="col-xl-4 col-md-12 pt-4 pt-xl-1">

                <h2>Highlights</h2>

                <?php foreach ($promoted_articles as $key => $post) : setup_postdata( $post ); ?>

                <div class="card mb-3 highlight-card">
                    <div class="row g-0 highlight-card-row">
                        <div class="col-md-3 pr-0 pl-1">
                            <?php the_post_thumbnail('thumbnail', array('class' => 'img-fluid')); ?>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h6><?php the_title(); ?></h6>
                                <p class="card-text"><?php the_excerpt(); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</section>