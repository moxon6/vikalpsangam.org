<?php
    get_header();
    $category = get_queried_object();
?>

<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">


                    <div id="infinite-scroll-content" class="row">
                        <?php
                        while (have_posts()) {
                            the_post();
                            get_template_part( 'template-parts/common/article-tile');
                        }
                    ?>
                    </div>

                </main>
                <aside class="col-sm-12 col-md-4 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
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