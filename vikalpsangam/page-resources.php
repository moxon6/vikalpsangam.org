<?php
    $resource = get_query_var( "resource", null);
    if (!is_null($resource)) {    
        get_template_part(
            "resource", 
            null,
            [ "resource_category" => explode("resources-", $resource)[1] ]
        );
        exit();
    }
?>

<?php 
    get_header();
?>
<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <h2><?php the_title() ?></h2>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <?php the_content(); ?>
                </div>
                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();