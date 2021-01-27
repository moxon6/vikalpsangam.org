<?php 
    $categoryPosts = $args['categoryPosts'];
?>


<div class="row justify-content-between">
    <div class="col-sm-6 col-xs-12">
        <h2>Stories By Category</h2>
    </div>
</div>
<div class="row justify-content-md-center">


    <?php 
        foreach ($categoryPosts as $categoryPost) {
            $post = $categoryPost["post"];
            setup_postdata( $post );
            $category = $categoryPost["category"];
            $category_image = get_category_image($category);                 
    ?>
    <div class="col-xs-12 col-lg-6 col-xl-3 mt-4">
        <div class="card category-card">


            <a class="see-all-stories card-header-wrapper" href="/article/category/<?php echo $category->slug; ?>">
                <div class="card-header">
                    <img class="card-header-category-image" src="<?php echo $category_image ?>" />
                    <span><?php echo $category -> name ?></span>
                </div>
            </a>

            <a class="see-all-stories card-body-wrapper" href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail("medium", ["class" => "card-img-top category-card-image"]); ?>
                <div class="card-body">
                    <span class="card-title"><?php the_title(); ?></span>
                </div>
            </a>
        </div>
    </div>

    <?php } ?>
</div>
<div class="row justify-content-between mt-4">
    <div class="col-12 d-flex justify-content-end">
        <a class="btn btn-primary" href="/article">SEE ALL CATEGORIES</a>
    </div>
</div>