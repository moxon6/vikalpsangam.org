<?php 
    define("MAILCHIMP_SUBMIT_URL", "//vikalpsangam.us9.list-manage.com/subscribe/post?u=16f6762000d0db3e3e5190bf6&amp;id=4bd0241c3a");
    function get_template_image_url($image_url) {
        return get_bloginfo('template_url') . $image_url . "?v=" . vikalpsangam_VERSION;
    }

    $footer_menus = ["footer-menu-1", "footer-menu-2", "footer-menu-3"];
    $logos = [
        "http://www.shikshantar.org" => get_template_image_url("/images/logos/shikshantar.png"),
        "http://www.kalpavriksh.org" => get_template_image_url("/images/logos/kalpavriksh.png"),
        "http://www.ddsindia.com" => get_template_image_url("/images/logos/ddsindia.png"),
        "http://www.bhoomicollege.org" => get_template_image_url("/images/logos/bhoomicollege.png"),
    ];

    $social_links = [
        "https://twitter.com/VikalpSangam" => get_template_image_url("/images/social/twitter.png"),
        "https://www.facebook.com/VikalpSangam" => get_template_image_url("/images/social/facebook.png"),
        "https://www.instagram.com/vikalpsangam" => get_template_image_url("/images/social/instagram.png")
    ];

    $footer_logo = get_template_image_url("/images/footer/site-logo.png");
?>

<footer class="container-fluid">
    <div class="footer-main row">
        <div class="footer-left col-xl-3 col-md-12">
            <div class="footer-logo">
                <a href="/">
                    <img class="img-fluid" src="<?php echo $footer_logo ?>" />
                </a>
            </div>
            <div class="footer-social-links-top">
                <?php foreach($social_links as $url => $image): ?>
                <div class="partner-logo">
                    <a href="<?php echo $url ?>">
                        <img src="<?php echo $image; ?>">
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="footer-center col-xl-3 col-lg-12 col-md-8">
            <h2 class="subscribe-title">Newsletter</h2>
            <p class="subscribe-description">Enter your email address below to subscribe to our monthly newsletter</p>
            <form action="<?php echo MAILCHIMP_SUBMIT_URL ?>" method="post">
                <input type="email" name="EMAIL" required placeholder="Email address">
                <button type="submit"> Sign up </button>
            </form>
        </div>

        <div class="footer-right col-xl-6 col-md-12">
            <?php
            foreach($footer_menus as $menu) {
                wp_nav_menu([
                    'theme_location' => $menu,
                    'container_class' => "list-items",
                    'menu_class' => 'list-group',
                    'add_li_class' => 'list-group-item',
                    'add_a_class' => 'list-group-item-heading'
                ]);
            }
            ?>
        </div>
    </div>
    <div class="footer-partners">
        <div class="partners-logos row">
            <?php foreach($logos as $url => $image): ?>
            <div class="partner-logo">
                <a href="<?php echo $url ?>">
                    <img src="<?php echo $image; ?>">
                </a>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</footer>


<?php wp_footer(); ?>

</body>

</html>