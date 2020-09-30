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
                            title="Case studies commissioned by Vikalp Sangam or other processes"
                            style="background-image: url('<?php echo get_category_image($category); ?>')"
                            href="<?php echo get_category_link($category->term_id); ?>">
                            <?php single_cat_title(); ?>
                        </a>

                         <div class="category-description">                             
                            <?php echo category_description(); ?>
                         </div>

                     </div>
                  
                    <div class="row category-page-category-list-wrapper category-topping-wrapper">                        
                        <?php
                            while ( have_posts() ) {
                                get_template_part( 'template-parts/common/article-tile', null, [ "post" => the_post() ]);
                            }
                        ?>
                    </div>
                     
                 </div>
                 <div class="col-sm-12 col-md-3 right-section">
                     <?php get_template_part('template-parts/common/sidebar') ?>
                 </div>
             </div>

         </div>

     </div>

 </div>

 <?php

get_footer();