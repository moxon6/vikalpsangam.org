<?php
    get_header();
?>
<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">
                    <h2><?php the_title() ?></h2>
                    <?php the_content(); ?>
                </main>
                <aside class="col-sm-12 col-md-4 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();