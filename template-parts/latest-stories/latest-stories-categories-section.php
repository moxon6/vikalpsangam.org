<?php

$categories = get_categories([
    "type"      => "post",      
    "orderby"   => "name",
    "order"     => "ASC",
    "exclude" => get_cat_ID("Perspectives")
]);

?>

<section id="storypage-categories" class="row">
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
        <div class="category-page-heading">
            <a class="category-title-link" style="background-image: url('<?php echo get_category_image($category); ?>')"
                href="<?php echo get_category_link($category->term_id); ?>">
                <?php echo $category->name ?>
            </a>
        </div>

        <div class="row category-page-category-list-wrapper">
            <?php foreach($posts as $post):
                get_template_part( 'template-parts/common/article-tile', null, [ "post" => $post ]);
            endforeach ?>
        </div>
        <div class="see-all-stories-wrapper">
            <a class="see-all-stories" href="<?php echo get_category_link($category->term_id); ?>">See all stories</a>
        </div>
    </div>
    <?php endforeach ?>
</section>