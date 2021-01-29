<?php
    $category = $args["category"];
?>

<a class="category-page-header" href="<?php echo get_category_link($category->term_id); ?>">
    <div class="card-header header">
        <img class="category-image" src="<?php echo get_category_image($category); ?>" />
        <span class="category-name"><?php echo $category->name ?></span>
    </div>
</a>