 <?php
    get_header();
?>

 <div id="content">
     <div class="section generic_section">
         <div class="container main-body-container">
             <div class="row">
                 <div class="col-md-9 right-border-separator left-section">
                     <div class="space-xs"></div>
                     <div class="space-xs"></div>
                     <div class="space-xs"></div>

                     <div class="category-page-heading">

                        <a class="category-title-link"
                            style="background-image: url('<?php echo get_category_image($category); ?>')"
                            href="<?php echo get_category_link($category->term_id); ?>">
                            <?php single_cat_title(); ?>
                        </a>

                         <div class="category-description">                             
                            <?php echo category_description(); ?>
                         </div>

                     </div>
                  
                    <div id="infinite-scroll-content" class="row category-page-category-list-wrapper category-topping-wrapper">                        
                        <?php
                            while (have_posts()) {
                                the_post();
                                get_template_part( 'template-parts/common/article-tile');
                            }
                        ?>
                    </div>
                     
                 </div>
                 <div class="col-sm-12 col-md-3 right-section">
                     <?php get_sidebar() ?>
                 </div>
             </div>

         </div>

     </div>

 </div>

 <?php

get_footer();