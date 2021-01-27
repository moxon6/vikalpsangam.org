<?php get_header(); ?>

<?php

$NUMBER_OF_CAROUSEL_ITEMS = 3;
$NUMBER_PROMOTED_ARTICLES = 3;
$NUMBER_STORIES_BY_CATEGORY = 4;

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

$categoryPosts = (new Categories())->getCategoryPosts($NUMBER_STORIES_BY_CATEGORY);

?>

<section class="main-section">
    <div class="container-fluid main-section-container">
        <div class="row ml-auto mr-auto pt-4 pb-4">
            <div class="col-xl-8 col-md-12">
                <div id="carouselExampleIndicators" class="carousel slide front-page-carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner">

                        <?php foreach ($carousel_items as $key => $post) { setup_postdata( $post );  ?>
                        <div class="carousel-item <?=($key == 0 ? "active" : "") ?>">
                            <img class="d-block w-100 carousel-image" alt="First slide [800x400]"
                                src="<?php the_post_thumbnail_url(); ?>" data-holder-rendered="true">
                        </div>

                        <?php } ?>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-xl-4 col-md-12 featured-list pt-4 pt-xl-1">

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

<section class="categories-section">
    <div class="container categories-section-container pt-4 pb-4">
        <div class="row justify-content-between">
            <div class="col-sm-6 col-xs-12">
                <h2>Stories By Category</h2>
            </div>
        </div>
        <div class="row justify-content-md-center">


            <?php 
            foreach ($categoryPosts as $categoryPost):
                $post = $categoryPost["post"];
                setup_postdata( $post );
                $category = $categoryPost["category"];
                $category_image = get_category_image($category);                 
            ?>
            <div class="col-xs-12 col-lg-6 col-xl-3 mt-4">
                <div class="card category-card">


                    <a class="see-all-stories card-header-wrapper"
                        href="/article/category/<?php echo $category->slug; ?>">
                        <div class="card-header">
                            <img class="card-header-category-image" src="<?php echo $category_image ?>" />
                            <span><?php echo $category -> name ?></span>
                        </div>
                    </a>

                    <a class="see-all-stories card-body-wrapper" href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail("medium", ["class" => "card-img-top category-card-image"]); ?>
                        <div class="card-body">
                            <span class="card-title"><?php the_title(); ?></span>
                        </div>
                    </a>
                </div>
            </div>

            <?php endforeach ?>
        </div>
        <div class="row justify-content-between mt-4">
            <div class="col-12 d-flex justify-content-end">
                <a class="btn btn-primary" href="/article">SEE ALL CATEGORIES</a>
            </div>
        </div>
    </div>
</section>

<?php wp_reset_postdata(); ?>

<section class="about-section">
    <div class="container-fluid about-section-container">
        <div class=" row about-section-row">
            <div class="col-md-12">
                <h3>ABOUT VIKALP SANGAM</h3>
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</section>


<?php get_footer();