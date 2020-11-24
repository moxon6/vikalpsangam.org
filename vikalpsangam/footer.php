<footer>
    <div class="partners">
        <div class="partners-logos">
            <div class="partner-logo">
                <a href="http://www.shikshantar.org/">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/shikshantar_md.png" alt="">
                </a>
            </div>
            <div class="partner-logo">
                <a href="http://www.kalpavriksh.org">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/kalpavriksh_md.png" alt="">
                </a>
            </div>
            <div class="partner-logo">
                <a href="http://www.ddsindia.com/">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/ddslogo_md.png" alt="">
                </a>
            </div>
            <div class="partner-logo">
                <a href="http://www.bhoomicollege.org">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/bhoomi_md.png" alt="">
                </a>
            </div>
        </div>
    </div>
    <div class="footer-items">
        <div id="footer-logo">
            <a href="/"> <img class="img-responsive hidden-md"
                    src="<?php bloginfo('template_url'); ?>/images/footer/footer_big_logo.png" /> </a>
            <a href="/"> <img class="img-responsive visible-md"
                    src="<?php bloginfo('template_url'); ?>/images/footer/footer_small_logo.png" /> </a>
        </div>
        <div class="footer-social-links-top">
            <a href="https://twitter.com/VikalpSangam">
                <img src="<?php bloginfo('template_url'); ?>/images/footer/twitter_page_footer.png">
            </a>
            <a href="https://www.facebook.com/pages/Vikalp-Sangam/483165198462325">
                <img src="<?php bloginfo('template_url'); ?>/images/footer/facebook_page_footer.png">
            </a>
            <a href="https://www.instagram.com/vikalpsangam">
                <img src="<?php bloginfo('template_url'); ?>/images/footer/instagram.png">
            </a>
        </div>

        <?php get_template_part( 'template-parts/subscribe' ); ?>

        <?php wp_nav_menu( array(
                'theme_location' => 'footer-menu-1',
                'container_class' => "list-items",
                'menu_class' => 'list-group',
                'add_li_class'  => 'list-group-item',
                'add_a_class' => 'list-group-item-heading'
            )); ?>

        <?php wp_nav_menu( array(
                'theme_location' => 'footer-menu-2',
                'container_class' => "list-items",
                'menu_class' => 'list-group',
                'add_li_class'  => 'list-group-item',
                'add_a_class' => 'list-group-item-heading'
            )); ?>

        <?php wp_nav_menu( array(
                'theme_location' => 'footer-menu-3',
                'container_class' => "list-items",
                'menu_class' => 'list-group',
                'add_li_class'  => 'list-group-item',
                'add_a_class' => 'list-group-item-heading'
            )); ?>
    </div>
</footer>


<?php wp_footer(); ?>

</body>

</html>