<?php

$categories = get_categories([
    "type"      => "post",      
    "orderby"   => "name",
    "order"     => "ASC",
    "exclude" => get_cat_ID("Perspectives")
]);

$recent_activity = get_posts(array(
    'numberposts' => 5,
    'post_type'	=> 'post',
    "orderby" => "date",
    "order" => "DSC"
));

?>

<div class="sidebar">
    <!-- TODO: Replace these spacer -->
    <div class="space-xs"></div>
    <div class="space-xs"></div>
    <div class="space-xs"></div>

    <h5>Story Categories</h5>
    <div id="category-list" class="category-list-wrapper">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-12 no-padding">
                <ul class="list-unstyled">
                    <?php foreach($categories as $category){ ?>
                    <li>
                        <img class="sidebar-icon" src="<?php echo get_category_image($category); ?>">
                        <a href="<?php echo get_category_link($category->term_id); ?>"><?php echo $category->name ?></a>
                    </li>
                    <?php } ?>

                </ul>
            </div>
        </div>
    </div>

    <?php
    function get_tags_from_post($posts) {
        $ids = [];
        $tags = [];
        foreach($posts as $post) {
            $post_tags = get_the_tags($post->ID);
            foreach($post_tags as $tag) {
                if (!in_array($tag->term_id, $ids)) {
                    $ids[] = $tag->term_id;
                    $tags[] = $tag;
                }
            }
        }
        return $tags;
    }
    
    $tags = get_tags_from_post(get_posts(array(
        'numberposts' => 10,
        'post_type'	=> 'post',
        "orderby" => "date",
        "order" => "DSC"
    )));    
?>


    <h5>Explore Stories</h5>
    <div id="tag-cloud" class="tag-cloud-wrapper">
        <div class="tag-cloud">

            <?php 
            function getWeight($count) {
                if ($count > 150) {
                    return 3;
                }
                if ($count > 50) {
                    return 2;
                }
                return 1;
            }
            foreach($tags as $tag){ 
            ?>
            <a href="/article/tag/<?php echo $tag->slug; ?>"
                class="tag-weight-<?php echo getWeight($tag->count); ?>"><?php echo $tag->name ?> </a>

            <?php } ?>
        </div>
    </div>

    <h5>Stories by Location</h5>

    <div id="map" class="sidebar-map"></div>
    <script>
    renderMap('map');
    </script>

    <h5>Events</h5>
    <div id="events-in-sidebar" style="padding-bottom: 10px">
        <div data-tockify-component="mini" data-tockify-calendar="alternatives"></div>
        <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js">
        </script>
    </div>

    <h5>Recent Posts</h5>
    <div class="featured-list in-sidebar">
        <ul class="list-unstyled">
            <?php foreach($recent_activity as $post){ 
            setup_postdata( $post ); ?>
            <li class="row">
                <div class="col-xs-4">
                    <?php the_post_thumbnail('thumbnail', array('class' => 'img-responsive')); ?>
                </div>
                <div class="col-xs-8">
                    <a href="<?php the_permalink(); ?>">
                        <h4 id="featured-article" class="media-heading">
                            <?php the_title(); ?>
                        </h4>
                    </a>
                    <!-- TODO: Truncate to 130 -->
                    <p><?php the_excerpt(); ?></p>
                </div>
            </li>
            <?php } ?>
        </ul>
    </div>
</div>