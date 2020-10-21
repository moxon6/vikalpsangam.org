var DataTypes = require("sequelize").DataTypes;
var _core_sitepermission_sites = require("./core_sitepermission_sites");
var _auth_user = require("./auth_user");
var _django_comments = require("./django_comments");
var _auth_user_groups = require("./auth_user_groups");
var _blog_blogpost = require("./blog_blogpost");
var _django_admin_log = require("./django_admin_log");
var _auth_user_user_permissions = require("./auth_user_user_permissions");
var _auth_group = require("./auth_group");
var _blog_blogpost_related_posts = require("./blog_blogpost_related_posts");
var _blog_blogpost_categories = require("./blog_blogpost_categories");
var _blog_blogcategory = require("./blog_blogcategory");
var _conf_setting = require("./conf_setting");
var _django_comment_flags = require("./django_comment_flags");
var _django_redirect = require("./django_redirect");
var _django_site = require("./django_site");
var _django_session = require("./django_session");
var _forms_formentry = require("./forms_formentry");
var _core_sitepermission = require("./core_sitepermission");
var _forms_form = require("./forms_form");
var _galleries_galleryimage = require("./galleries_galleryimage");
var _generic_assignedkeyword = require("./generic_assignedkeyword");
var _twitter_query = require("./twitter_query");
var _pages_richtextpage = require("./pages_richtextpage");
var _galleries_gallery = require("./galleries_gallery");
var _django_content_type = require("./django_content_type");
var _generic_threadedcomment = require("./generic_threadedcomment");
var _south_migrationhistory = require("./south_migrationhistory");
var _pages_page = require("./pages_page");
var _pages_link = require("./pages_link");
var _generic_keyword = require("./generic_keyword");
var _vikalp_articlecategory = require("./vikalp_articlecategory");
var _generic_rating = require("./generic_rating");
var _twitter_tweet = require("./twitter_tweet");
var _vikalp_article_article_categories = require("./vikalp_article_article_categories");
var _vikalp_article = require("./vikalp_article");
var _forms_field = require("./forms_field");
var _forms_fieldentry = require("./forms_fieldentry");
var _auth_permission = require("./auth_permission");
var _auth_group_permissions = require("./auth_group_permissions");

function initModels(sequelize) {
  var core_sitepermission_sites = _core_sitepermission_sites(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var django_comments = _django_comments(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var blog_blogpost = _blog_blogpost(sequelize, DataTypes);
  var django_admin_log = _django_admin_log(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var blog_blogpost_related_posts = _blog_blogpost_related_posts(sequelize, DataTypes);
  var blog_blogpost_categories = _blog_blogpost_categories(sequelize, DataTypes);
  var blog_blogcategory = _blog_blogcategory(sequelize, DataTypes);
  var conf_setting = _conf_setting(sequelize, DataTypes);
  var django_comment_flags = _django_comment_flags(sequelize, DataTypes);
  var django_redirect = _django_redirect(sequelize, DataTypes);
  var django_site = _django_site(sequelize, DataTypes);
  var django_session = _django_session(sequelize, DataTypes);
  var forms_formentry = _forms_formentry(sequelize, DataTypes);
  var core_sitepermission = _core_sitepermission(sequelize, DataTypes);
  var forms_form = _forms_form(sequelize, DataTypes);
  var galleries_galleryimage = _galleries_galleryimage(sequelize, DataTypes);
  var generic_assignedkeyword = _generic_assignedkeyword(sequelize, DataTypes);
  var twitter_query = _twitter_query(sequelize, DataTypes);
  var pages_richtextpage = _pages_richtextpage(sequelize, DataTypes);
  var galleries_gallery = _galleries_gallery(sequelize, DataTypes);
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var generic_threadedcomment = _generic_threadedcomment(sequelize, DataTypes);
  var south_migrationhistory = _south_migrationhistory(sequelize, DataTypes);
  var pages_page = _pages_page(sequelize, DataTypes);
  var pages_link = _pages_link(sequelize, DataTypes);
  var generic_keyword = _generic_keyword(sequelize, DataTypes);
  var vikalp_articlecategory = _vikalp_articlecategory(sequelize, DataTypes);
  var generic_rating = _generic_rating(sequelize, DataTypes);
  var twitter_tweet = _twitter_tweet(sequelize, DataTypes);
  var vikalp_article_article_categories = _vikalp_article_article_categories(sequelize, DataTypes);
  var vikalp_article = _vikalp_article(sequelize, DataTypes);
  var forms_field = _forms_field(sequelize, DataTypes);
  var forms_fieldentry = _forms_fieldentry(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);

  return {
    core_sitepermission_sites,
    auth_user,
    django_comments,
    auth_user_groups,
    blog_blogpost,
    django_admin_log,
    auth_user_user_permissions,
    auth_group,
    blog_blogpost_related_posts,
    blog_blogpost_categories,
    blog_blogcategory,
    conf_setting,
    django_comment_flags,
    django_redirect,
    django_site,
    django_session,
    forms_formentry,
    core_sitepermission,
    forms_form,
    galleries_galleryimage,
    generic_assignedkeyword,
    twitter_query,
    pages_richtextpage,
    galleries_gallery,
    django_content_type,
    generic_threadedcomment,
    south_migrationhistory,
    pages_page,
    pages_link,
    generic_keyword,
    vikalp_articlecategory,
    generic_rating,
    twitter_tweet,
    vikalp_article_article_categories,
    vikalp_article,
    forms_field,
    forms_fieldentry,
    auth_permission,
    auth_group_permissions,
  };
}
module.exports = { initModels };
