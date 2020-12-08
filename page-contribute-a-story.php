<?php
get_header();
?>
<div class="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 right-border-separator left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <h3><?php the_title(); ?></h3>
                    <?php the_content(); ?>
                </div>
                <div class="col-sm-12 col-md-3 right-section">
                    <?php get_sidebar() ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();