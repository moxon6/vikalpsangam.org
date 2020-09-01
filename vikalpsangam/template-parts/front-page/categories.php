<?php 
    $article_content = $args['article_content'];
    $categories_url = "/article"; // TODO : Replace this
?>

<div class="container">
    <div class="row">
        <div class="col-sm-6 col-xs-12"><h2>STORIES BY CATEGORY</h2></div>
        <div class="col-sm-6 hidden-xs"><a class="see-all-stories top" href="/article">SEE ALL CATEGORIES</a></div>
    </div>
    <div class="row no-margin">
        <div class="category-page-category-list-wrapper">

            <?php foreach ($article_content as $key => $article) { ?>

            
                <div class="col-xs-6 col-sm-3 category">

                    <div class="row top-sub-section">

                        <div class="col-xs-3">
                            <img class="img-responsive" src="<?php echo $article['category_image']; ?>"/>
                        </div>

                        <div class="col-xs-9">
                            <h4>
                                <a class="see-all-stories" href="<?php echo $categories_url; ?>">
                                    <?php echo $article['category_title']; ?>
                                </a>
                            </h4>
                        </div>

                    </div>

                    <div class="row image-sub-section">
                        <div class="col-xs-12">
                            <img class="img-responsive" src="<?php echo $article['category_thumbnail']; ?>"/>
                        </div>
                    </div>

                    <div class="row plain-text-sub-section">
                        <p class="col-xs-12">
                            <a class="see-all-stories" href="{{ article.get_absolute_url }}"><?php echo $article['title']; ?></a>
                        </p>
                    </div>

                </div>

            <?php } ?>

        </div>
        
        <div class="col-xs-12 see-all-stories-wrapper">
                <a class="see-all-stories visible-xs" href="/article">SEE ALL CATEGORIES</a>
        </div>
    </div>
</div>

    

