<div class="card mb-2 highlight-card container-fluid">
    <div class="row g-0 highlight-card-row justify-content-space-between">
        <div class="col-3 highlight-card-thumbnail-col">
            <?php the_post_thumbnail('thumbnail', array('class' => 'img-fluid featured-list-image')); ?>
        </div>
        <div class="col-9 highlight-card-text-col">
            <div class="card-body featured-list-card-body">
                <h6><?php the_title(); ?></h6>
                <?php the_excerpt(); ?>
            </div>
        </div>
    </div>
</div>