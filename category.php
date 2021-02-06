<?php
    get_header();
    $category = get_queried_object();
?>

<div id="page">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">


                    <div class="category-page-heading">

                        <a class="category-title-link"
                            style="background-image: url('<?php echo get_category_image($category) ?>')"
                            href="<?php echo get_category_link($category->id); ?>">
                            <?php single_cat_title(); ?>
                        </a>

                        <div class="category-description">
                            <div style="display:none" class="long">
                                <?php echo category_description(); ?>
                                <a id="toggle" class="category-desc-collapse-description">
                                    <span class="glyphicon glyphicon-circle-arrow-up"></span> Collapse
                                </a>
                            </div>
                            <div class="short">
                                <p><?php echo get_field('short-description', $category); ?></p>
                                <a id="toggle" class="read-more-description">
                                    <span class="glyphicon glyphicon-circle-arrow-down"></span> Read More
                                </a>
                            </div>
                        </div>


                    </div>

                    <div id="infinite-scroll-content"
                        class="row category-page-category-list-wrapper category-topping-wrapper">
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
<script>
const short = $(".category-description .short")
const long = $(".category-description .long")
for (const el of [short, long]) {
    el.find("#toggle")
        .on("click", () => {
            short.toggle()
            long.toggle();
        })
}
</script>
<?php



get_footer();