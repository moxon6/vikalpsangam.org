<?php

require_once  get_template_directory() .'/mock-data/tags.php';
require_once  get_template_directory() .'/mock-data/categories.php';
require_once  get_template_directory() .'/mock-data/recent-activity.php';

function getArticleUrl($tagName) {
    $articleUrl = str_replace(" ", "-", $tagName);
    $articleUrl = str_replace(",", "", $articleUrl);
    return strtolower($articleUrl);
}
?>

<!-- TODO: Replace these spacer -->
<div class="space-xs"></div>
<div class="space-xs"></div>
<div class="space-xs"></div>

<h5>Story Categories</h5>
<div id="category-list" class="category-list-wrapper">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-12 no-padding">
            <ul class="list-unstyled">
                <?php foreach($categories as $category){ ?>
                    <li style="list-style-image:url(<?=$category['thumbnail_image'] ?>)">
                        <a href="<?=$category['url']?>"><?=$category['title'] ?></a>
                    </li>
                <?php } ?>

            </ul>
        </div>
    </div>
</div>

<h5>Explore Stories</h5>
<div id="tag-cloud" class="tag-cloud-wrapper">
    <div class="tag_cloud">
        <?php foreach($tags as $tag){ ?>
            <a href="/article/tag/<?=getArticleUrl($tag['name']); ?>" class="tag-weight-<?=$tag['weight'] ?>"><?=$tag['name'] ?> </a>
        <?php } ?>
    </div>
</div>

<h5>Stories by Location</h5>
<a href="/map">
    <h1>TODO: Map Component</h1>
</a>

<h5>Recent Activity On</h5>
<div class="featured-list in-sidebar">    
    <ul class="list-unstyled">
        <?php foreach($recent_articles as $article){ ?>
            <li class="row">
                <div class="col-xs-4">
                    <img class="img-responsive" src="<?=$article['thumbnail_url'] ?>">
                </div>
                <div class="col-xs-8">
                    <a href="/article/<?=getArticleUrl($article['name']);?>">
                        <h4 id="featured-article" class="media-heading"><?=$article['name']; ?></h4>
                    </a>
                </div>
            </li>
        <?php } ?>
    </ul>
</div>

<h5>Events</h5>
<div id="events-in-sidebar" style="padding-bottom: 10px">
    <iframe width="100%" height="285" src="http://vs-calender.s3-website.ap-south-1.amazonaws.com/"></iframe>
</div>

<!-- Notes: Some h5 elements have been moved out of their divs -->