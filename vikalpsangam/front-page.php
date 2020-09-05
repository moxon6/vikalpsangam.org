<?php get_header(); ?>

<div id="content">

    <?php require_once get_template_directory() .'/mock-data/articles.php'; ?>

    <section class="top-carousel-wrapper">
        <div class="row no-right-margin">
            <div class="col-md-8 col-xs-12">
                <?php get_template_part( 'template-parts/front-page/carousel', null, [ "article_content" => $article_content ]); ?>
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
        <?php get_template_part( 'template-parts/front-page/about'); ?>
    </section>
</div>

<?php get_footer();
