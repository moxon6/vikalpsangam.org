<div id="article-comments" class="comments-section">
    <div id="comments">
        <h3>Comments</h3>
        <style>
        .input_id_honeypot {
            display: none !important;
        }
        </style>
        There are no comments yet on this Story.
        <div class="row border-bottom-only-wrapper">
            <div class="col-xs-12">
                <div class="border-bottom-only"></div>
            </div>
        </div>
        <a class="new-comment-button" id="addNewCommentBtn">
            <h4>Add New Comment</h4>
        </a>
        <div id="addNewCommentsFormWrapper">
            <form method="post" id="comment" action="/comment/#comment">
                <input type="hidden" name="referrer" value="http://vikalpsangam.org/article/">
                <input type="hidden" name="csrfmiddlewaretoken" value="RcaOo4AWrpBiKs64kWICWeDoYM2HmDtQ">
                <div class="help-block">
                    <span>Fields marked as <span class="color-red">*</span> are mandatory.</span>
                </div>
                <input id="id_content_type" name="content_type" type="hidden" value="vikalp.article">
                <input id="id_object_pk" name="object_pk" type="hidden" value="1877">
                <input id="id_timestamp" name="timestamp" type="hidden" value="1599414755">
                <input id="id_security_hash" name="security_hash" type="hidden"
                    value="e2f8bb0b21b257a3af0a73e74de3721ed6eb7bbb">
                <div class="control-group input_id_name">
                    <label style="padding-top: 15px" for="id_name">
                        Name
                        <a style="color: red">*</a>
                    </label>
                    <div class="controls">
                        <div class="form-fields">
                            <input id="id_name" maxlength="50" name="name" type="text">
                        </div>
                    </div>
                </div>
                <div class="control-group input_id_email">
                    <label style="padding-top: 15px" for="id_email">
                        Email
                        <a style="color: red">*</a>
                    </label>
                    <div class="controls">
                        <div class="form-fields">
                            <div class="help-text"> required (not published) </div>
                            <input id="id_email" name="email" type="text">
                        </div>
                    </div>
                </div>
                <div class="control-group input_id_url">
                    <label style="padding-top: 15px" for="id_url">
                        Website
                    </label>
                    <div class="controls">
                        <div class="form-fields">
                            <div class="help-text"> optional </div>
                            <input id="id_url" name="url" type="text">
                        </div>
                    </div>
                </div>
                <div class="control-group input_id_comment">
                    <label style="padding-top: 15px" for="id_comment">
                        Comment
                        <a style="color: red">*</a>
                    </label>
                    <div class="controls">
                        <div class="form-fields">
                            <textarea cols="40" id="id_comment" name="comment" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div class="control-group input_id_honeypot">
                    <label style="padding-top: 15px" for="id_honeypot">
                        If you enter anything in this field your comment will be treated as spam
                    </label>
                    <div class="controls">
                        <div class="form-fields">
                            <input id="id_honeypot" name="honeypot" type="text">
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <input class="btn btn-primary btn-large" type="submit" value="Post">
                </div>
            </form>
        </div>
    </div>
    <script>
    $(function() {
        $('.reply').click(function() {
            $('.reply-form').hide();
            $(this).next('.reply-form').toggle();
        });
    });
    </script>
</div>