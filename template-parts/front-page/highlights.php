<?php 
    $article_content = $args['article_content'];
?>

<h2>Highlights</h2>


    <?php foreach ($article_content as $key => $post) : setup_postdata( $post ); ?>


    <div class="card mb-3 highlight-card">
        <div class="row g-0 highlight-card-row">
            <div class="col-md-3 pr-0 pl-1">
                <?php the_post_thumbnail('thumbnail', array('class' => 'img-fluid')); ?>
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h4 class="media-heading"><?php the_title(); ?></h4>
                    <p class="card-text"><?php the_excerpt(); ?></p>
                </div>
            </div>
        </div>
    </div>



    <?php endforeach ?>
