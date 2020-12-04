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
                data-slide-to="<?=$key ?>" 
                class="<?=($key == 0 ? "active" : "") ?>">
            </li>
        <?php } ?>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

        <?php foreach ($article_content as $key => $post) {
            setup_postdata( $post ); 

        ?>

            <div class="item <?=($key == 0 ? "active" : "") ?>">
                <div
                    class="fill-image" 
                    style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
                </div>
                <div class="carousel-caption hidden-xs">
                    <h2><?php the_title(); ?></h2>
                    <p>
                        <?php the_excerpt(); ?>
                    </p>
                </div>
                <div class="carousel-caption-bottom visible-xs">
                    <h2><?php the_title() ?></h2>

                    <p>
                        <?php the_excerpt(); ?>
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

