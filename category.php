<?php
    get_header();
    $category = get_queried_object();
?>

<div id="page">
    <div class="section generic_section">
        <section class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">

                    <?php get_template_part( 'template-parts/common/category-header', null, ["category" => $category]); ?>

                    <div class="container-fluid p-0">
                        <div class="row" id="infinite-scroll-content">
                            <?php while (have_posts()): the_post(); ?>
                            <div class="col-xs-4 col-md-6 col-lg-4 pb-4">
                                <?php get_template_part( 'template-parts/common/article-tile'); ?>
                            </div>
                            <?php endwhile ?>
                        </div>
                    </div>


                </main>
                <aside class="col-sm-12 col-md-4 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </section>
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