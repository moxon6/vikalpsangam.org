<?php

get_header();

?>

<?php
    require_once get_template_directory() .'/mock-data/perspective-articles.php';
?>

<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div class="category-page-heading">
                        <div class="category-title-link no-icon"><?php single_tag_title("") ?></div>
                    </div>
                    <div class="row category-page-category-list-wrapper category-topping-wrapper" id="articles-list">
                        <?php 
                        $tag = get_queried_object();
                        $posts = get_posts(array(
                            'numberposts' => 12,
                            'tag' => $tag->slug
                        ));  
                        
                        
                        foreach($posts as $post){
                            get_template_part( 'template-parts/common/article-tile', null, [ "article" => $post ]);
                        } ?>
                        <!-- TODO : Reintroduce Endless logic -->
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>

        </div>

    </div>

</div>

<?php

get_footer();