<?php define("MAILCHIMP_SUBMIT_URL", "//vikalpsangam.us9.list-manage.com/subscribe/post?u=16f6762000d0db3e3e5190bf6&amp;id=4bd0241c3a"); ?>

<footer>
    <div class="partners">
        <div class="partners-logos">
            <div class="partner-logo">
                <a href="http://www.shikshantar.org/">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/shikshantar_md.png?v=<?php echo vikalpsangam_VERSION ?>" alt="">
                </a>
            </div>
            <div class="partner-logo">
                <a href="http://www.kalpavriksh.org">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/kalpavriksh_md.png?v=<?php echo vikalpsangam_VERSION ?>" alt="">
                </a>
            </div>
            <div class="partner-logo">
                <a href="http://www.ddsindia.com/">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/ddslogo_md.png?v=<?php echo vikalpsangam_VERSION ?>" alt="">
                </a>
            </div>
            <div class="partner-logo">
                <a href="http://www.bhoomicollege.org">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/bhoomi_md.png?v=<?php echo vikalpsangam_VERSION ?>" alt="">
                </a>
            </div>
        </div>
    </div>
    <div class="footer-items">
        <div class="footer-left">
            <div id="footer-logo">
                <a href="/"> <img class="img-responsive"
                        src="<?php bloginfo('template_url'); ?>/images/footer/footer_big_logo.png?v=<?php echo vikalpsangam_VERSION ?>" /> </a>
            </div>
            <div class="footer-social-links-top">
                <a href="https://twitter.com/VikalpSangam">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/twitter_page_footer.png?v=<?php echo vikalpsangam_VERSION ?>">
                </a>
                <a href="https://www.facebook.com/pages/Vikalp-Sangam/483165198462325">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/facebook_page_footer.png?v=<?php echo vikalpsangam_VERSION ?>">
                </a>
                <a href="https://www.instagram.com/vikalpsangam">
                    <img src="<?php bloginfo('template_url'); ?>/images/footer/instagram.png?v=<?php echo vikalpsangam_VERSION ?>">
                </a>
            </div>
        </div>

        <div class="subscribe">
            <h2 class="subscribe-title">Newsletter</h2>
            <p class="subscribe-description">Enter your email address below to subscribe to our monthly newsletter</p>
            <form
                action="<?php echo MAILCHIMP_SUBMIT_URL ?>"
                method="post"
                >
                <input type="email" name="EMAIL" required placeholder="Email address">
                <button type="submit"> Sign up </button>
            </form>
        </div>

        <div class="footer-right">
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




    </div>
</footer>


<?php wp_footer(); ?>

</body>

</html>