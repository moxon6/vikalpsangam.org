<?php

require_once  get_template_directory() .'/mock-data/tags.php';
require_once  get_template_directory() .'/mock-data/categories.php';
require_once  get_template_directory() .'/mock-data/recent-activity.php';

$categories = get_categories([
    "type"      => "post",      
    "orderby"   => "name",
    "order"     => "ASC" 
]);

?>

<style>
    .sidebar-icon {
        width: 30px;
        height: 30px;
        margin-right: 3px;
        margin-bottom: 5px;
        image-rendering: -moz-crisp-edges;         /* Firefox */
        image-rendering:   -o-crisp-edges;         /* Opera */
        image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
    }
</style>

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
    $recent_posts = get_posts(array(
            'numberposts' => 10,
            'post_type'	=> 'post',
            "orderby" => "date",
            "order" => "DSC"
    ));

    function get_tags_from_post($posts) {
        $ids = [];
        $tags = [];
        foreach($posts as $post) {
            $post_tags = get_the_tags($post->ID);
            foreach($post_tags as $tag) {
                if (!in_array($ids, $tag->term_id)) {
                    $ids[] = $tag->term_id;
                    $tags[] = $tag;
                }
            }
        }
        return $tags;
    }
    
    $tags = get_tags_from_post($recent_posts);    
?>

<h5>Explore Stories</h5>
<div id="tag-cloud" class="tag-cloud-wrapper">
    <div class="tag_cloud">
        
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
            <a href="/article/tag/<?php echo $tag->slug; ?>" class="tag-weight-<?php echo getWeight($tag->count); ?>"><?php echo $tag->name ?> </a>

        <?php } ?>
    </div>
</div>

<h5>Stories by Location</h5>

<div id="map" class="sidebar-map"></div>
<script> renderMap('map'); </script>

<h5>Events</h5>
<div id="events-in-sidebar" style="padding-bottom: 10px">
    <div data-tockify-component="mini" data-tockify-calendar="alternatives"></div>
    <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
</div>
