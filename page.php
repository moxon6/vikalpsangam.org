<?php
    get_header();
?>
<div id="page">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <h2><?php the_title() ?></h2>
                    <?php the_content(); ?>
                </div>
                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_sidebar() ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();