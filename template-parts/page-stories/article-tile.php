<?php
    $category = get_the_category()[0];
?>

<div class="col-xs-6 col-sm-4 category">
    <a class="category-title-wrapper" href="<?=$article['category_url']; ?>">
        <img style="width:30px; height:30px" src="<?php echo get_category_image($category); ?>">
        <span style="text-transform: uppercase"><?php echo $category->name; ?></span>
    </a>

    <a class="category-link-wrapper" href="<?php echo get_category_link($category->term_id); ?>">
        <div class="top-sub-section">
            <h4><?php the_title() ?></h4>
        </div>
    </a>
    <a class="category-image-wrapper" href="<?php echo get_the_permalink(); ?>">
        <div class="image-sub-section col-xs-12">
            <?php the_post_thumbnail('medium', array('class' => 'img-responsive category-image')); ?>
        </div>
    </a>
    <div class="plain-text-sub-section">
        <p class="col-cs-12 excerpt"> 
            <?php echo filter_excerpt(get_the_excerpt()); ?>
        </p>
    </div>
    
    <div class="read-more-wrapper">
            <a class="read-more" href="<?php echo get_the_permalink(); ?>">
                Read More
            </a>
        </div>
</div>