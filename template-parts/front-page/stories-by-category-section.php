<?php
    $NUMBER_STORIES_BY_CATEGORY = 4;
    $categoryPosts = (new Categories())->getCategoryPosts($NUMBER_STORIES_BY_CATEGORY);
?>

<section id="stories-by-category-section">
    <div class="container stories-by-category-section-container pt-4 pb-4">
        <div class="row justify-content-between">
            <div class="col-sm-6 col-xs-12">
                <h4>Stories By Category</h4>
            </div>
        </div>
        <div class="row justify-content-center">


            <?php 
            foreach ($categoryPosts as $categoryPost):
                $post = $categoryPost["post"];
                setup_postdata( $post );
                $category = $categoryPost["category"];
                $category_image = get_category_image($category);                 
                ?>
            <div class="col-xs-4 col-md-6 col-lg-3 pb-4">
                <?php get_template_part( 'template-parts/common/article-tile', null, [ "category" => $category ]); ?>
            </div>
            <?php            ?>

            <?php endforeach ?>
        </div>
        <div class="row justify-content-between mt-4">
            <div class="col-12 d-flex justify-content-end">
                <a class="btn btn-primary" href="/article">SEE ALL CATEGORIES</a>
            </div>
        </div>
    </div>
</section>