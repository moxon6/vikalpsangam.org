<?php
    $resource_category = $args["resource_category"];
    get_header();

    $resource_map = [
        "economics-technologies" => "alternative-economies",
        "energy" => "energy",
        "environment-ecology" => "environment-ecology",
        "food-water" => "food-and-water",
        "health-hygiene" => "health-hygiene",
        "knowledge-media" => "knowledge-media",
        "learning-education" => "learning-and-education",
        "livelihoods" => "livelihoods",
        "politics" => "alternative-politics",
        "settlements-transport" => "settlements",
        "society-culture-peace" => "society-culture",
    ];

    $category = get_category_by_slug($resource_map[$resource_category]);
?>
<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">

                    <h4>Resources: <?php echo $category->cat_name ?></h4>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-visual-audio">
                            <img height="77" src="/wp-content/uploads/migrate/logos/audio_visual.png"
                                style="vertical-align: middle;" width="80">
                            <span>Visual & Audio</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-books-reports-newsletters">
                            <img height="78" src="/wp-content/uploads/migrate/logos/papers.png"
                                style="vertical-align: middle;" width="80">
                            <span>Books, Reports & Newsletters</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-websites">
                            <img height="80" src="/wp-content/uploads/migrate/logos/websites.png"
                                style="vertical-align: middle;" width="80">
                            <span>Websites</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-networks">
                            <img height="77" src="/wp-content/uploads/migrate/logos/networks.png"
                                style="vertical-align: middle;" width="80">
                            <span>Networks</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-tools">
                            <img height="75" src="/wp-content/uploads/migrate/logos/tools_r.png"
                                style="vertical-align: middle;" width="80">
                            <span>Tools</span>
                        </a>
                    </p>
                    <p>
                        <a href="/article/<?php echo $resource_category ?>-alternative-products">
                            <img height="83" src="/wp-content/uploads/migrate/logos/products.png"
                                style="vertical-align: middle;" width="81">
                            <span>Alternative Products & Services</span>
                        </a>
                    </p>

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