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
                    <h3>THIS IS A DUMMY FORM - No logic is wired up here</h3>
                    <p>A platform like this cannot be successful without the active involvement of people from all parts
                        of the country and all walks of life. If you have a story, a book or a film that has inspired
                        you, or even if you simply have a lead to an initiative, we’d like to hear from you!</p>
                    <p>The stories can be practical activities, policies, processes, technologies, and
                        concepts/frameworks. They can be practiced or proposed/propagated by communities, government,
                        civil society organizations, individuals. The main features of such a story would be ecological
                        sustainability, social well-being and democracy. Of course no single initiative may have all
                        these features, but even if they have one they are worth featuring here, so long as they are not
                        seriously threatening the others.&nbsp;</p>
                    <p>Please provide as much of details about the story in the story description, do mention any
                        keywords, contact persons details so that others can get in touch with them. Do refer to <a
                            href="/contribute-a-story/story-guidelines">story posting guidelines</a>.</p>
                    <p>If you face any issues with this form, feel free to contact us on <a
                            href="mailto:info@vikalpsangam.org">alternativesforum@gmail.com</a></p>
                    <div class="comments-section">
                        <form method="post" enctype="multipart/form-data">
                            <input type="hidden" name="referrer" value="">
                            <input type="hidden" name="csrfmiddlewaretoken" value="RcaOo4AWrpBiKs64kWICWeDoYM2HmDtQ">
                            <div class="help-block">
                                <span>Fields marked as <span class="color-red">*</span> are mandatory.</span>
                            </div>
                            <div class="control-group input_id_field_1 charfield">
                                <label style="padding-top: 15px" for="id_field_1">
                                    Name
                                    <a style="color: red">*</a>
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <input id="id_field_1" maxlength="2000" name="field_1" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_3 emailfield">
                                <label style="padding-top: 15px" for="id_field_3">
                                    Email Id
                                    <a style="color: red">*</a>
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> An email where we can reach you </div>
                                        <input id="id_field_3" maxlength="2000" name="field_3" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_2 floatfield">
                                <label style="padding-top: 15px" for="id_field_2">
                                    Contact Number
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> In case of any clarification </div>
                                        <input id="id_field_2" name="field_2" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_4 charfield">
                                <label style="padding-top: 15px" for="id_field_4">
                                    Story Location
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> Enter District &amp; State or latitude-longitude </div>
                                        <input id="id_field_4" maxlength="2000" name="field_4" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_8 urlfield">
                                <label style="padding-top: 15px" for="id_field_8">
                                    Link, if available
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> If story is already published on web then link to it
                                        </div>
                                        <input id="id_field_8" maxlength="2000" name="field_8" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_5 charfield">
                                <label style="padding-top: 15px" for="id_field_5">
                                    Story Description
                                    <a style="color: red">*</a>
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> Provide summary and details about the story, do mention
                                            any keywords, contact persons details etc. </div>
                                        <textarea cols="40" id="id_field_5" name="field_5" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_6 filefield">
                                <label style="padding-top: 15px" for="id_field_6">
                                    Detailed Story Attachment
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> If you have more than 1 file then please attach a Zip
                                            file containing all files. Max size 5MB. </div>
                                        <input id="id_field_6" name="field_6" type="file">
                                    </div>
                                </div>
                            </div>
                            <div class="control-group input_id_field_7 charfield">
                                <label style="padding-top: 15px" for="id_field_7">
                                    Remarks
                                </label>
                                <div class="controls">
                                    <div class="form-fields">
                                        <div class="help-text"> Anything else that you would like to share about the
                                            story. </div>
                                        <textarea cols="40" id="id_field_7" name="field_7" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions" style="padding-top: 10px">
                                <input class="btn btn-primary btn-large" value="Submit">
                            </div>
                        </form>
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