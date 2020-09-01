<?php 
    $article_content = $args['article_content'];
?>
<h2>Highlights</h2>
<ul class="list-unstyled">
    <?php foreach ($article_content as $key => $article) { ?>

        <li class="row">
            <div class="col-xs-4">                
                <img class="img-responsive" src="<?php echo $article['highlight_image'] ?>">
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