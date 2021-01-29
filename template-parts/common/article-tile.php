<div class="col-xs-4 col-md-6 col-lg-4 pb-4 article-tile">
    <div class="card article-tile-card">
        <?php the_post_thumbnail("large", ["class" => "card-img-top article-tile-image"]) ?>
        <div class="card-body">
            <h6 class="card-title article-tile-title"><?php the_title() ?></h6>
            <p class="card-text clamp-4"><?php echo filter_excerpt(get_the_excerpt()); ?></p>
            <a href="<?php echo get_the_permalink(); ?>" class="btn btn-primary">Read More</a>
        </div>
    </div>
</div>