<?php 
    $article_content = $args['article_content'];
?>
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

