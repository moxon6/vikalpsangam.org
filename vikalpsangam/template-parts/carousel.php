<?php
    $article_content = [
        [
            "title" => "TEMP: TOWARDS NETWORKING AND ACTION FOR LOCAL SELF-RELIANCE AND DIGNIFIED LIVELIHOODS",
            "featured_image" => "/wp-content/themes/vikalpsangam/images/carousel_logo_temp.png",
            "description" => "",
            "absolute_url" => "/article/1",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png"
        ],
        [
            "title" => "Title 2",
            "featured_image" => "/wp-content/themes/vikalpsangam/images/carousel_logo_temp.png",
            "description" => "description-2-truncate-to-256",
            "absolute_url" => "/article/2",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png"
        ],
        [
            "title" => "Title 3",
            "featured_image" => "",
            "description" => "description-3-truncate-to-256",
            "absolute_url" => "/article/3",
            "highlight_image" => "/wp-content/themes/vikalpsangam/images/featured_temp.png"
        ]
    ];
?>

<section class="top-carousel-wrapper">
    <div class="row no-right-margin">
        <div class="col-md-8 col-xs-12">
            <div class="verticle-border"></div>
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">

                    <?php foreach ($article_content as $key => $article) { ?>
                        <li 
                            data-target="#carousel-example-generic" 
                            data-slide-to="<?php echo $key ?>" 
                            class="<?php echo($key == 0 ? "active" : "") ?>">
                        </li>
                    <?php } ?>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">

                    <?php foreach ($article_content as $key => $article) { ?>

                        <div class="item <?php echo($key == 0 ? "active" : "") ?>">
                            <div
                                class="fill-image" 
                                style="background-image: url(
                                   <?php echo $article['featured_image']; ?>
                                )">
                            </div>
                            <div class="carousel-caption hidden-xs">
                                <h2><?php echo $article['title']; ?></h2>

                                <p>
                                    <?php echo $article['description']; ?>
                                </p>
                            </div>
                            <div class="carousel-caption-bottom visible-xs">
                                <h2><?php echo $article['title']; ?></h2>

                                <p>
                                    <!-- TODO: Truncate to 256 -->
                                    <?php echo $article['description']; ?>
                                </p>
                            </div>
                        </div>

                    <?php } ?>
                </div>

                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>


        </div>
        <div class="col-md-4 col-xs-12 featured-list">
            <h2>Highlights</h2>

            <ul class="list-unstyled">
                <?php foreach ($article_content as $key => $article) { ?>

                    <li class="row">
                        <div class="col-xs-4">
                            <?php
                                $DEFAULT_IMAGE = "/wp-content/themes/vikalpsangam/images/default.png";
                                $img_src = strlen($article['highlight_image']) > 0 ? $article['highlight_image'] : $DEFAULT_IMAGE;
                            ?>
                            
                            <img class="img-responsive" src="<?php echo $img_src ?>">
                        </div>
                        <div class="col-xs-8">
                            <a href="<?php echo $article['absolute_url']; ?>"><h4 id="featured-article" class="media-heading"><?php echo $article['title']; ?></h4>
                            </a>
                            
                            <!-- TODO: Truncate to 130 -->
                            <p><?php echo $article['description']; ?></p>

                        </div>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
</section>
