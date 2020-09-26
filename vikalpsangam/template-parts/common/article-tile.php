<?php setup_postdata( $args["post"] ); ?>
<div class="col-xs-6 col-sm-4 category">
    <a class="category-link-wrapper" href="<?php echo get_the_permalink(); ?>">
        <div class="top-sub-section">
            <h4 style="height: 64px;"><?php the_title() ?></h4>
        </div>
        <div class="category-image-wrapper">
            <?php the_post_thumbnail("large", ["class" => "img-responsive category-image"]) ?>
        </div>
    </a>
    <div class="plain-text-sub-section">
            <p class="col-cs-12 excerpt"> 
                <?php echo filter_excerpt(get_the_excerpt()); ?>
            </p>
    </div>
    <div class="read-more-wrapper">
            <a class="read-more" href="<?php echo get_the_permalink(); ?>">
                Read More
            </a>
        </div>
</div>