<div class="card mb-2 highlight-card container-fluid">
    <div class="row g-0 highlight-card-row justify-content-space-between">
        <div class="col-3 highlight-card-thumbnail-col">
            <a href="<?php echo get_the_permalink() ?>">
                <?php the_post_thumbnail('thumbnail', array('class' => 'img-fluid featured-list-image')); ?>
            </a>
        </div>
        <div class="col-9 highlight-card-text-col">
            <div class="card-body featured-list-card-body">
                <a href="<?php echo get_the_permalink() ?>">
                    <h6><?php the_title(); ?></h6>
                </a>
                <?php the_excerpt(); ?>
            </div>
        </div>
    </div>
</div>