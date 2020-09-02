<?php $article = $args['article']; ?>
<div class="col-xs-6 col-sm-4 category">
    <a class="category-link-wrapper" href="<?=$article['url'] ?>">
        <div class="top-sub-section">
            <h4 style="height: 64px;"><?=$article['title']?></h4>
        </div>
        <div class="image-sub-section col-xs-12">

            <img class="img-responsive" src="<?=$article['image'] ?>">

        </div>
    </a>
    <div class="plain-text-sub-section">
        <p class="col-xs-12" style="height: 54px;"><?=$article['description']?></p>

        <div class="read-more-wrapper">
            <a class="read-more" href="<?=$article['url'] ?>">
                Read More
            </a>
        </div>
    </div>
</div>