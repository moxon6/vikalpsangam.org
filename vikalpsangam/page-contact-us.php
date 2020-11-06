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
                        <form method="post">
                            <input type="hidden" name="referrer" value="http://vikalpsangam.org/about/">
                            <input type="hidden" name="csrfmiddlewaretoken" value="RcaOo4AWrpBiKs64kWICWeDoYM2HmDtQ">
                            <div class="help-block">
                                <span>Fields marked as <span class="color-red">*</span> are mandatory.</span>
                            </div>
                            <div class="control-group input_id_field_9 charfield">
                                <label style="padding-top: 15px" for="id_field_9">
                                    Name
                                    <a style="color: red">*</a>
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <input id="id_field_9" maxlength="2000" name="field_9" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_10 charfield">
                                <label style="padding-top: 15px" for="id_field_10">
                                    Email ID / Phone no
                                    <a style="color: red">*</a>
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> A way to contact you for more details </div>
                                        <input id="id_field_10" maxlength="2000" name="field_10" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_12 charfield">
                                <label style="padding-top: 15px" for="id_field_12">
                                    Your Query / Comments / Feedback
                                    <a style="color: red">*</a>
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <textarea cols="40" id="id_field_12" name="field_12" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions" style="padding-top: 10px">
                                <input class="btn btn-primary btn-large" type="submit" value="Submit">
                            </div>
                        </form>
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