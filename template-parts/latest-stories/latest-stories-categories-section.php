<?php

$categories = get_categories([
    "type"      => "post",      
    "orderby"   => "name",
    "order"     => "ASC",
    "exclude" => get_cat_ID("Perspectives")
]);

?>

<section class="container-fluid" id="storypage-categories">
    <div class="row">


        <?php foreach($categories as $category) :
            $posts = get_posts(array(
                'numberposts'	=> 3,
                'post_type'		=> 'post',
                "orderby"   => "date",
                "order"     => "DSC",
                'category'	=> $category -> cat_ID
            ));
        ?>

        <div class="col-xs-12 category-topping-wrapper">

            <?php get_template_part( 'template-parts/common/category-header', null, [ "category" => $category ]); ?>

            <div class="row category-page-category-list-wrapper">
                <?php foreach($posts as $post):
                    get_template_part( 'template-parts/common/article-tile', null, [ "post" => $post ]);
                endforeach ?>
            </div>
        </div>
        <?php endforeach ?>
    </div>
</section>