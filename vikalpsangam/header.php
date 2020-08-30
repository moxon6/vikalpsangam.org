<!DOCTYPE html>

<!-- TODO: Generate LANGUAGE_CODE from wordpress -->
<!-- <html lang="{{ LANGUAGE_CODE }}"{% if LANGUAGE_BIDI %} dir="rtl"{% endif %}> -->
<html lang="en">

<head>

<!-- TODO: Generate Title from wordpress -->
<link rel="shortcut icon" href="{% static "img/favicon.png?v=4" %}">
<meta charset="utf-8">

<!-- TODO : Generate Meta tags based on WP -->
<meta charset="utf-8">
<meta name="keywords" content="comunity conservation, civil society initiative, energy, education, economy, ecology, settlements, rural, organic-farming, sustainability, environment, environmental issues, Bhoomi, livelihoods, case studies, alternative learning, social issues, society, seeds, Kalpavriksh, Shikshantar, Deccan Development Society, Bhoomi College">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">


<!-- 
<script src="{% static "mezzanine/js/"|add:settings.JQUERY_FILENAME %}"></script>
<script src="{% static "js/bootstrap.min.js" %}"></script>

<script src="{{ STATIC_URL }}endless_pagination/js/endless-pagination.js"></script>

<script src="{% static "js/app.js" %}"></script>
<script src="{% static "js/modern-business.js" %}"></script>   
-->

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="navbar navbar-default navbar-fixed-top" role="navigation">
    <a href="#" class="show-language-bar">
		<?php /*

		TODO : Replace this with WP generated

        {% get_language_info_list for LANGUAGES as languages %}
        {% for language in languages %}
            {% if language.code == LANGUAGE_CODE and language.code == 'en' %}
{#                <span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;{{ language.name_local }}#}
                <span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;<div style="float: right">Change<br>Language</div>
            {% elif language.code == LANGUAGE_CODE and language.code == 'hi' %}
{#                <span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;हिंदी#}
                <span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;<div style="float: right">भाषा<br>बदलें</div>
            {% elif language.code == LANGUAGE_CODE and language.code == 'ta' %}
{#                <span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;{{ language.name_local }}#}
                <span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp;<div style="float: right">மொழி <br>மாற்ற</div>
            {% endif %}
		{% endfor %}
		
		*/ ?>
        <!-- <span class="glyphicon glyphicon-chevron-down"></span> -->
    </a>
    <div class="language-wrapper">
        <form action="{% url 'set_language' %}" method="post">
			
            <!-- TODO : Replace csrf token {% csrf_token %} -->
            <input type="hidden" name="language" id="languageHiddenElement" value=""/>
            <input name="next" type="hidden" value="/"/>
            <!-- TODO, generate langauges menu {% get_language_info_list for LANGUAGES as languages %} -->
            <div class="btn-group" data-toggle="buttons" id="langaugeSelection">
				<!-- TODO: Generate languages menu 
                {% for language in languages %}
                    <label class="btn btn-primary {% if language.code == LANGUAGE_CODE %}mchecked{% endif %}" >
                        <input type="radio" name="options" value="{{ language.code }}"
                               {% if language.code == LANGUAGE_CODE %}checked{% endif %}> {% ifequal language.code 'hi' %}हिंदी {% else %}{{ language.name_local }}{% endifequal %}
                    </label>
                {% endfor %}
				-->
            </div>
        </form>
        <a href="#" class="hide-language-bar"><span class="glyphicon glyphicon-remove-circle"></span></a>
    </div>

    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
				<!-- TODO: Generate navbar-right 
                {% for page in page_branch %}
                    {% for in_menu in page.in_menus %}
                        {% ifequal in_menu '1' %}
                            {% ifnotequal page.title "Home" %}
                                <li {% if page.is_current_or_ascendant %}class="active"{% endif %}>
                                    <a {% if page.description|wordcount < 5 %} title="{% trans page.description %}" {% endif %}
                                        href="{{ page.get_absolute_url }}">
                                    {% with page.title|upper as page_title %}{% trans page_title %}{% endwith %}</a>
                                </li>
                            {% endifnotequal %}
                        {% endifequal %}
                    {% endfor %}
                {% endfor %}
                <li>
                    {% search_form %}
                </li>
                <li>
                    <a class="link-but-not-a-link" href="javascript:void(0)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </li>
				-->
            </ul>
        </div>
    </div>
</header>
