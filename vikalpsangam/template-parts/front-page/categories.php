<?php 
    $article_content = $args['article_content'];
    $categories = get_categories([
        "hide_empty" => 1,
        "type"      => "post",      
        "orderby"   => "name",
        "order"     => "ASC" 
    ]);
    
    shuffle( $categories );
    $categories = array_slice($categories, 0, 4);
    $ids = [];


?>

<style>
    .category-image {
        width: 70px;
        height: 70px;
    }
</style>

<div class="container">
    <div class="row">
        <div class="col-sm-6 col-xs-12"><h2>STORIES BY CATEGORY</h2></div>
        <div class="col-sm-6 hidden-xs"><a class="see-all-stories top" href="/article">SEE ALL CATEGORIES</a></div>
    </div>
    <div class="row no-margin">
        <div class="category-page-category-list-wrapper">
            
            <?php foreach ($categories as $category) {

                $posts = get_posts(array(
                    'numberposts'	=> 1,
                    'post_type'		=> 'post',
                    "orderby"   => "date",
                    "order"     => "DSC",
                    "exclude" => $ids,
                    'category'	=> $category -> cat_ID
                ));
                $post = $posts[0];
                array_push($ids, $post -> ID);                
                setup_postdata( $post );

                $category_image = get_category_image($category);
            ?>

                <div class="col-xs-6 col-sm-3 category">

                    <div class="row top-sub-section">

                        <div class="col-xs-3">
                            <img class="img-responsive category-image" src="<?php echo $category_image ?>" />
                        </div>

                        <div class="col-xs-9">
                            <h4>
                                <a class="see-all-stories" href="/article/category/<?php echo $category->slug; ?>">
                                    <?php echo $category -> name ?>
                                </a>
                            </h4>
                        </div>

                    </div>

                    <div class="row image-sub-section">
                        <div class="col-xs-12 stories-by-category">
                            <?php echo the_post_thumbnail(["auto",218], ["class" => "img-responsive"]); ?>
                        </div>
                    </div>

                    <div class="row plain-text-sub-section">
                        <p class="col-xs-12">
                            <a class="see-all-stories" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
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

    

