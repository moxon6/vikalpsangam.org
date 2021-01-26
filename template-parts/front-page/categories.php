<?php 
    $categoryPosts = $args['categoryPosts'];
?>

<style>
.categories-container {
    max-width: 1600px;
    padding-left: 0;
    padding-right: 0;
}

.category-card {
    height: 100%;
}

.category-card-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
    background-color: #9f332f;
}

.card-header-wrapper {
    flex-shrink: 0;
    flex-grow: 1;
    min-height: 120px;
    max-height: 150px;
    
}

.card-header {
    color: #9e332e;
    text-decoration: none;
    text-transform: uppercase;
    height: 100%;
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.card-header span {
    text-align: center;
    font-size: 20px;
}

.card-header-category-image {
    width: 70px;
}

.card-body {
    padding: 8px;
    height: 120px;
    flex-grow: 0;
}

</style>


<div class="container categories-container pt-4 pb-4">
    <div class="row justify-content-between">
        <div class="col-sm-6 col-xs-12">
            <h2>STORIES BY CATEGORY</h2>
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
</div>