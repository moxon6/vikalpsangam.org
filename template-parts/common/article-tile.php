<?php
    $category = $args["category"];
?>

<div class="article-tile">
    <div class="card article-tile-card">

        <?php if ($category != null): ?>

        <a class="see-all-stories category-card-header-wrapper" href="/article/category/<?php echo $category->slug; ?>">
            <div class="card-header header">
                <img class="category-image" src="<?php echo get_category_image($category); ?>" />
                <span class="category-name"><?php echo $category -> name ?></span>
            </div>
        </a>

        <?php endif ?>

        <?php the_post_thumbnail("large", ["class" => "card-img-top article-tile-image"]) ?>
        <div class="card-body">
            <h6 class="card-title article-tile-title"><?php the_title() ?></h6>
            <p class="card-text article-tile-text"><?php echo filter_excerpt(get_the_excerpt()); ?></p>

        </div>
        <footer class="card-footer article-tile-footer">
            <a href="<?php echo get_the_permalink(); ?>" class="btn btn-primary btn-sm">Read More</a>
        </footer>
    </div>
</div>