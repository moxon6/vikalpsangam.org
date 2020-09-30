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

                         <div class="category-title-link" style="background-image: url('<?=$category['image']?>')">
                             <?=$category['title'] ?>
                         </div>


                         <div class="category-description">
                             <p class="long" style="display:none">
                                <?=$category['long_description'] ?>
                                 <a href="javascript:void(0);" class="category-desc-collapse-description"><span
                                         class="glyphicon glyphicon-circle-arrow-up"></span>&nbsp;Collapse</a>
                             </p>

                             <p class="short"><?=$category['short_description'] ?>
                                 <a href="javascript:void(0);" class="read-more-description"><span
                                         class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;Read More</a>
                             </p>
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