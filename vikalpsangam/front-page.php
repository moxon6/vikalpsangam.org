<?php get_header(); ?>

<?php
$posts = get_posts(array(
	'numberposts'	=> -1,
	'post_type'		=> 'post',
	'meta_key'		=> 'add_to_carousel',
	'meta_value'	=> '1'
));
?>

<div id="content">

    <?php require_once get_template_directory() .'/mock-data/articles.php'; ?>

    <section class="top-carousel-wrapper">
        <div class="row no-right-margin">
            <div class="col-md-8 col-xs-12">
                <?php 
                    get_template_part( 'template-parts/front-page/carousel', null, [ "article_content" => $posts ]); 
                ?>
            </div>
            <div class="col-md-4 col-xs-12 featured-list">
                <?php get_template_part( 'template-parts/front-page/highlights', null, [ "article_content" => $article_content ]); ?>
            </div>
        </div>
    </section>

    <section class="category-section">
        <?php get_template_part( 'template-parts/front-page/categories', null, [ "article_content" => $article_content ]); ?>
    </section>

    <section class="about_section">
        <div class="container">
        <h2>ABOUT VIKALP SANGAM</h2>
    <div class="row no-margin">
       <?php the_content() ?>
    </div>
        </div>
    </section>
</div>

<?php get_footer();
