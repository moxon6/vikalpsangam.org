<?php
    get_header();
?>
<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-xl-8 col-md-12 left-section">
                    <h2><?php the_title() ?></h2>
                    <?php the_content(); ?>
                </main>
                <aside class="col-xl-4 col-md-12 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();