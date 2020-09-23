<?php 
    $article_content = $args['article_content'];
?>
<h2>Highlights</h2>
<ul class="list-unstyled">
    <?php foreach ($article_content as $key => $post) { 
        setup_postdata( $post ); 
    ?>
        <li class="row">
            <div class="col-xs-4">                
                <?php the_post_thumbnail('thumbnail', array('class' => 'img-responsive')); ?>
            </div>
            <div class="col-xs-8">
                <a href="<?php the_permalink(); ?>">
                    <h4 id="featured-article" class="media-heading">
                        <?php the_title(); ?>
                    </h4>
                </a>                
                <!-- TODO: Truncate to 130 -->
                <p><?php the_excerpt(); ?></p>
            </div>
        </li>
    <?php } ?>
</ul>