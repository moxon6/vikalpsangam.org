<?php
    $resource_category = $args["resource_category"];
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
                    <h4>Resources:Economics & Technologies</h4>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-visual-audio">
                            <img height="77" src="/wp-content/uploads/migrate/logos/audio_visual.png" style="vertical-align: middle;" width="80">
                            <span>Visual & Audio</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-books-reports-newsletters">
                            <img height="78" src="/wp-content/uploads/migrate/logos/papers.png" style="vertical-align: middle;" width="80">
                            <span>Books, Reports & Newsletters</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-websites">
                            <img height="80" src="/wp-content/uploads/migrate/logos/websites.png" style="vertical-align: middle;" width="80">
                            <span>Websites</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-networks">
                            <img height="77" src="/wp-content/uploads/migrate/logos/networks.png" style="vertical-align: middle;" width="80">
                            <span>Networks</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-tools">
                            <img height="75" src="/wp-content/uploads/migrate/logos/tools_r.png" style="vertical-align: middle;" width="80">
                            <span>Tools</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-alternative-products">
                            <img height="83" src="/wp-content/uploads/migrate/logos/products.png" style="vertical-align: middle;" width="81">
                            <span>Alternative Products & Services</span>
                        </a>
                    </p>

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