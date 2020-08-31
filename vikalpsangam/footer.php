<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vikalpsangam
 */

?>

<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 logo hidden-sm hidden-xs">
                <div id="footer-logo">
                    <a href="/"> <img class="img-responsive hidden-md" src="<?php bloginfo('template_url'); ?>/images/footer_big_logo.png"/> </a>
                    <a href="/"> <img class="img-responsive visible-md" src="<?php bloginfo('template_url'); ?>/images/footer_small_logo.png"/> </a>
                </div>
                <div class="row footer-social-links-top">
                    <div class="col-xs-12">
                        <a href="https://twitter.com/VikalpSangam">
                            <img src="<?php bloginfo('template_url'); ?>/images/twitter_page_footer.png" class="img-responsive" width="50px">
                        </a>
                        <a href="https://www.facebook.com/pages/Vikalp-Sangam/483165198462325">
                            <img src="<?php bloginfo('template_url'); ?>/images/facebook_page_footer.png" class="img-responsive" width="50px">
                        </a>
                        <a href="/feeds">
                            <img src="<?php bloginfo('template_url'); ?>/images/rss_page_footer.png" class="img-responsive" width="50px">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 visible-lg">
                <?php get_template_part( 'template-parts/subscribe' ); ?>
            </div>

            <div class="row footer-social-links-bottom hidden-lg hidden-md">
                <div class="col-sm-offset-2 col-sm-4 col-xs-12">
                    <a href="https://twitter.com/VikalpSangam">
                        <img src="<?php bloginfo('template_url'); ?>/images/twitter_page_footer.png" class="img-responsive" width="50px">
                    </a>
                    <a href="https://www.facebook.com/pages/Vikalp-Sangam/483165198462325">
                        <img src="<?php bloginfo('template_url'); ?>/images/facebook_page_footer.png" class="img-responsive" width="50px">
                    </a>
                    <a href="/feeds">
                        <img src="<?php bloginfo('template_url'); ?>/images/rss_page_footer.png" class="img-responsive">
                    </a>
                </div>
                <div class="small-screens col-sm-6 col-xs-12">
                    <?php get_template_part( 'template-parts/subscribe' ); ?>
                </div>
            </div>

            <?php wp_nav_menu( array(
                'theme_location' => 'footer-menu-1',
                'container_class' => "col-lg-2 col-md-3 col-sm-4 col-xs-12 list-items",
                'menu_class' => 'list-group',
                'add_li_class'  => 'list-group-item',
                'add_a_class' => 'list-group-item-heading'
            )); ?>

            <?php wp_nav_menu( array(
                'theme_location' => 'footer-menu-2',
                'container_class' => "col-lg-2 col-md-3 col-sm-4 col-xs-12 list-items",
                'menu_class' => 'list-group',
                'add_li_class'  => 'list-group-item',
                'add_a_class' => 'list-group-item-heading'
            )); ?>

            <?php wp_nav_menu( array(
                'theme_location' => 'footer-menu-3',
                'container_class' => "col-lg-2 col-md-3 col-sm-4 col-xs-12 list-items",
                'menu_class' => 'list-group',
                'add_li_class'  => 'list-group-item',
                'add_a_class' => 'list-group-item-heading'
            )); ?>
        </div>

        <div class="row logos-collection">
                <div class="col-md-2 col-xs-6 col-sm-2">
                    <a href="http://www.kalpavriksh.org" target="_blank">
                        <img src="<?php bloginfo('template_url'); ?>/images/kalpavriksh_md.png" alt="" class="kalpawriksha img-responsive">
                    </a>
                </div>
                <div class="col-xs-6 visible-xs">
                    <a href="http://www.ddsindia.com/" target="_blank">
                        <img src="<?php bloginfo('template_url'); ?>/images/ddslogo_md.png" alt="" class="dds img-responsive">
                    </a>
                </div>
                <div class="col-md-8 col-sm-8">
                    <div class="row">
                        <div class="visible-md">
                            <?php get_template_part( 'template-parts/subscribe' ); ?>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <a href="http://www.bhoomicollege.org" target="_blank">
                                <img src="<?php bloginfo('template_url'); ?>/images/bhoomi_md.png" alt="" class="bhoomi img-responsive">
                            </a>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-12">
                            <a href="http://www.swaraj.org/shikshantar/" target="_blank">
                                <img src="<?php bloginfo('template_url'); ?>/images/shikshantar_md.png" alt="" class="shikshantar img-responsive">
                            </a>
                        </div>
                    </div>

                </div>
                <div class="col-md-2 col-sm-2 hidden-xs">
                    <a href="http://www.ddsindia.com/" target="_blank">
                        <img src="<?php bloginfo('template_url'); ?>/images/ddslogo_md.png" alt="" class="dds img-responsive">
                    </a>
                </div>
            </div>

    </div>
</footer>
	

<?php wp_footer(); ?>

</body>
</html>
