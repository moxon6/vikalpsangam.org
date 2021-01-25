<?php
get_header();
?>

<div id="page">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">

                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div id="map-page-writeup">
                        <h2><?php the_title() ?></h2>
                        <?php the_content() ?>
                        
                    </div>

                    <div id="large-map"> </div>
                </div>
                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_sidebar() ?>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    #large-map {
        height: 800px;
    }
</style>

<script>

    renderMap('large-map');
</script>

<?php
get_footer();