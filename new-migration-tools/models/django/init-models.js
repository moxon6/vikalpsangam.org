var DataTypes = require("sequelize").DataTypes;
var _blog_blogpost = require("./blog_blogpost");
var _auth_user = require("./auth_user");
var _auth_group = require("./auth_group");
var _django_comments = require("./django_comments");
var _blog_blogcategory = require("./blog_blogcategory");
var _auth_user_groups = require("./auth_user_groups");
var _auth_user_user_permissions = require("./auth_user_user_permissions");
var _django_admin_log = require("./django_admin_log");
var _blog_blogpost_categories = require("./blog_blogpost_categories");
var _conf_setting = require("./conf_setting");
var _django_comment_flags = require("./django_comment_flags");
var _core_sitepermission = require("./core_sitepermission");
var _django_content_type = require("./django_content_type");
var _django_redirect = require("./django_redirect");
var _django_site = require("./django_site");
var _core_sitepermission_sites = require("./core_sitepermission_sites");
var _blog_blogpost_related_posts = require("./blog_blogpost_related_posts");
var _django_session = require("./django_session");
var _generic_assignedkeyword = require("./generic_assignedkeyword");
var _galleries_gallery = require("./galleries_gallery");
var _forms_formentry = require("./forms_formentry");
var _south_migrationhistory = require("./south_migrationhistory");
var _forms_form = require("./forms_form");
var _galleries_galleryimage = require("./galleries_galleryimage");
var _pages_richtextpage = require("./pages_richtextpage");
var _twitter_query = require("./twitter_query");
var _vikalp_articlecategory = require("./vikalp_articlecategory");
var _generic_rating = require("./generic_rating");
var _pages_link = require("./pages_link");
var _generic_keyword = require("./generic_keyword");
var _pages_page = require("./pages_page");
var _generic_threadedcomment = require("./generic_threadedcomment");
var _twitter_tweet = require("./twitter_tweet");
var _vikalp_article = require("./vikalp_article");
var _vikalp_article_article_categories = require("./vikalp_article_article_categories");
var _forms_fieldentry = require("./forms_fieldentry");
var _auth_group_permissions = require("./auth_group_permissions");
var _forms_field = require("./forms_field");
var _auth_permission = require("./auth_permission");

function initModels(sequelize) {
  var blog_blogpost = _blog_blogpost(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var django_comments = _django_comments(sequelize, DataTypes);
  var blog_blogcategory = _blog_blogcategory(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var django_admin_log = _django_admin_log(sequelize, DataTypes);
  var blog_blogpost_categories = _blog_blogpost_categories(sequelize, DataTypes);
  var conf_setting = _conf_setting(sequelize, DataTypes);
  var django_comment_flags = _django_comment_flags(sequelize, DataTypes);
  var core_sitepermission = _core_sitepermission(sequelize, DataTypes);
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var django_redirect = _django_redirect(sequelize, DataTypes);
  var django_site = _django_site(sequelize, DataTypes);
  var core_sitepermission_sites = _core_sitepermission_sites(sequelize, DataTypes);
  var blog_blogpost_related_posts = _blog_blogpost_related_posts(sequelize, DataTypes);
  var django_session = _django_session(sequelize, DataTypes);
  var generic_assignedkeyword = _generic_assignedkeyword(sequelize, DataTypes);
  var galleries_gallery = _galleries_gallery(sequelize, DataTypes);
  var forms_formentry = _forms_formentry(sequelize, DataTypes);
  var south_migrationhistory = _south_migrationhistory(sequelize, DataTypes);
  var forms_form = _forms_form(sequelize, DataTypes);
  var galleries_galleryimage = _galleries_galleryimage(sequelize, DataTypes);
  var pages_richtextpage = _pages_richtextpage(sequelize, DataTypes);
  var twitter_query = _twitter_query(sequelize, DataTypes);
  var vikalp_articlecategory = _vikalp_articlecategory(sequelize, DataTypes);
  var generic_rating = _generic_rating(sequelize, DataTypes);
  var pages_link = _pages_link(sequelize, DataTypes);
  var generic_keyword = _generic_keyword(sequelize, DataTypes);
  var pages_page = _pages_page(sequelize, DataTypes);
  var generic_threadedcomment = _generic_threadedcomment(sequelize, DataTypes);
  var twitter_tweet = _twitter_tweet(sequelize, DataTypes);
  var vikalp_article = _vikalp_article(sequelize, DataTypes);
  var vikalp_article_article_categories = _vikalp_article_article_categories(sequelize, DataTypes);
  var forms_fieldentry = _forms_fieldentry(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var forms_field = _forms_field(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);

  return {
    blog_blogpost,
    auth_user,
    auth_group,
    django_comments,
    blog_blogcategory,
    auth_user_groups,
    auth_user_user_permissions,
    django_admin_log,
    blog_blogpost_categories,
    conf_setting,
    django_comment_flags,
    core_sitepermission,
    django_content_type,
    django_redirect,
    django_site,
    core_sitepermission_sites,
    blog_blogpost_related_posts,
    django_session,
    generic_assignedkeyword,
    galleries_gallery,
    forms_formentry,
    south_migrationhistory,
    forms_form,
    galleries_galleryimage,
    pages_richtextpage,
    twitter_query,
    vikalp_articlecategory,
    generic_rating,
    pages_link,
    generic_keyword,
    pages_page,
    generic_threadedcomment,
    twitter_tweet,
    vikalp_article,
    vikalp_article_article_categories,
    forms_fieldentry,
    auth_group_permissions,
    forms_field,
    auth_permission,
  };
}
module.exports = { initModels };
