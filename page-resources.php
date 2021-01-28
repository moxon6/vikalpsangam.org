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
<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">

                    <h2><?php the_title() ?></h2>
                    <?php the_content(); ?>
                </main>
                <aside class="col-sm-12 col-md-4 right-section left-border-separator">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();