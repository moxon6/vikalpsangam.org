<?php
get_header();
?>
<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <h1>THIS IS A DUMMY FORM: Contact Us</h1>
                    <p>You can join us on our mailing list to participate in discussions and share stories of
                        alternatives. Here is a link to <a
                            href="https://groups.google.com/forum/#!forum/vikalp-sangam-list"
                            target="_blank">subscribe</a>.</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>If you have any queries or suggestions or need more information please contact us as below:</p>
                    <div class="comments-section">
                        <?php the_content(); ?>
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