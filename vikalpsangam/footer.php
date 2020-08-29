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
	<!-- TODO: Generate footer.php from WP -->
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 logo hidden-sm hidden-xs">
                <div id="footer-logo">
                    <a href="/"> <img class="img-responsive hidden-md" src="/static/img/footer_big_logo.png"/> </a>
                    <a href="/"> <img class="img-responsive visible-md" src="/static/img/footer_small_logo.png"/> </a>
                </div>
                <div class="row footer-social-links-top">
                    <div class="col-xs-12">
                        <a href="https://twitter.com/VikalpSangam">
                            <img src="/static/img/twitter_page_footer.png" class="img-responsive" width="50px">
                        </a>
                        <a href="https://www.facebook.com/pages/Vikalp-Sangam/483165198462325">
                            <img src="/static/img/facebook_page_footer.png" class="img-responsive" width="50px">
                        </a>
                        <a href="/feeds">
                            <img src="/static/img/rss_page_footer.png" class="img-responsive" width="50px">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 visible-lg">
                {% include "subscribe.html" %}
            </div>

            <div class="row footer-social-links-bottom hidden-lg hidden-md">
                <div class="col-sm-offset-2 col-sm-4 col-xs-12">
                    <a href="https://twitter.com/VikalpSangam">
                        <img src="/static/img/twitter_page_footer.png" class="img-responsive" width="50px">
                    </a>
                    <a href="https://www.facebook.com/pages/Vikalp-Sangam/483165198462325">
                        <img src="/static/img/facebook_page_footer.png" class="img-responsive" width="50px">
                    </a>
                    <a href="/feeds">
                        <img src="/static/img/rss_page_footer.png" class="img-responsive">
                    </a>
                </div>
                <div class="small-screens col-sm-6 col-xs-12">
                    {% include "subscribe.html" %}
                </div>
            </div>


                    {% for page in page_branch %}
                        {% for in_menu in page.in_menus %}
                            {% ifequal in_menu '3' %}
                                {% ifequal page.parent None %}
                                    {% if page.has_children_in_menu %}
                                        {% with menu_pages|get:page.id as child_pages %}
                                            {% for child_page in child_pages %}
                                                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 list-items">
                                            <ul class="list-group"> {% if '3' in child_page.in_menus %}
                                                <li class="list-group-item"><a class="list-group-item-heading"
                                                                               href="{{ child_page.get_absolute_url }}">{% trans child_page.title %}</a>
                                                </li> {% endif %}

                                                {% with menu_pages|get:child_page.id as child_child_pages %}
                                                    {% for child_child_page in child_child_pages %}
                                                        {% if '3' in child_child_page.in_menus %}
                                                            <li class="list-group-item">
                                                                <a class="list-group-item-text"
                                                                   href="{{ child_child_page.get_absolute_url }}">{% trans child_child_page.title %}</a>
                                                            </li> {% endif %}
                                                    {% endfor %}
                                                {% endwith %}

                                            </ul>

                                            </div>

                                            {% endfor %}
                                        {% endwith %}
                                    {% endif %}

                                {% endifequal %}

                            {% endifequal %}
                        {% endfor %}

                    {% endfor %}

            </div>


            <div class="row logos-collection">
                <div class="col-md-2 col-xs-6 col-sm-2">
                    <a href="http://www.kalpavriksh.org" target="_blank">
                        <img src="/static/img/kalpavriksh_md.png" alt="" class="kalpawriksha img-responsive">
                    </a>
                </div>
                <div class="col-xs-6 visible-xs">
                    <a href="http://www.ddsindia.com/" target="_blank">
                        <img src="/static/img/ddslogo_md.png" alt="" class="dds img-responsive">
                    </a>
                </div>
                <div class="col-md-8 col-sm-8">
                    <div class="row">
                        <div class="visible-md">
                            {% include "subscribe.html" %}
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <a href="http://www.bhoomicollege.org" target="_blank">
                                <img src="/static/img/bhoomi_md.png" alt="" class="bhoomi img-responsive">
                            </a>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-12">
                            <a href="http://www.swaraj.org/shikshantar/" target="_blank">
                                <img src="/static/img/shikshantar_md.png" alt="" class="shikshantar img-responsive">
                            </a>
                        </div>
                    </div>

                </div>
                <div class="col-md-2 col-sm-2 hidden-xs">
                    <a href="http://www.ddsindia.com/" target="_blank">
                        <img src="/static/img/ddslogo_md.png" alt="" class="dds img-responsive">
                    </a>
                </div>
            </div>

        </div>
</footer>
















	
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
