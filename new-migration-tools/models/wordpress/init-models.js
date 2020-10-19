var DataTypes = require("sequelize").DataTypes;
var _auth_group = require("./auth_group");
var _auth_permission = require("./auth_permission");
var _auth_group_permissions = require("./auth_group_permissions");
var _auth_user_groups = require("./auth_user_groups");
var _auth_user = require("./auth_user");
var _wp_comments = require("./wp_comments");
var _auth_user_user_permissions = require("./auth_user_user_permissions");
var _wp_postmeta = require("./wp_postmeta");
var _wp_commentmeta = require("./wp_commentmeta");
var _wp_links = require("./wp_links");
var _wp_redirection_items = require("./wp_redirection_items");
var _wp_posts = require("./wp_posts");
var _wp_redirection_404 = require("./wp_redirection_404");
var _wp_options = require("./wp_options");
var _wp_redirection_groups = require("./wp_redirection_groups");
var _wp_redirection_logs = require("./wp_redirection_logs");
var _wp_term_taxonomy = require("./wp_term_taxonomy");
var _wp_term_relationships = require("./wp_term_relationships");
var _wp_termmeta = require("./wp_termmeta");
var _wp_usermeta = require("./wp_usermeta");
var _wp_terms = require("./wp_terms");
var _wp_wfblockediplog = require("./wp_wfblockediplog");
var _wp_wfblocks7 = require("./wp_wfblocks7");
var _wp_wffilemods = require("./wp_wffilemods");
var _wp_wfcrawlers = require("./wp_wfcrawlers");
var _wp_wfconfig = require("./wp_wfconfig");
var _wp_wfissues = require("./wp_wfissues");
var _wp_wfhoover = require("./wp_wfhoover");
var _wp_wffilechanges = require("./wp_wffilechanges");
var _wp_wflogins = require("./wp_wflogins");
var _wp_wfknownfilelist = require("./wp_wfknownfilelist");
var _wp_users = require("./wp_users");
var _wp_wfhits = require("./wp_wfhits");
var _wp_wfpendingissues = require("./wp_wfpendingissues");
var _wp_wflocs = require("./wp_wflocs");
var _wp_wfls_2fa_secrets = require("./wp_wfls_2fa_secrets");
var _wp_wfls_settings = require("./wp_wfls_settings");
var _wp_wfreversecache = require("./wp_wfreversecache");
var _wp_wfsnipcache = require("./wp_wfsnipcache");
var _wp_wflivetraffichuman = require("./wp_wflivetraffichuman");
var _wp_wftrafficrates = require("./wp_wftrafficrates");
var _wp_wfnotifications = require("./wp_wfnotifications");
var _wp_wfstatus = require("./wp_wfstatus");

function initModels(sequelize) {
  var auth_group = _auth_group(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var wp_comments = _wp_comments(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var wp_postmeta = _wp_postmeta(sequelize, DataTypes);
  var wp_commentmeta = _wp_commentmeta(sequelize, DataTypes);
  var wp_links = _wp_links(sequelize, DataTypes);
  var wp_redirection_items = _wp_redirection_items(sequelize, DataTypes);
  var wp_posts = _wp_posts(sequelize, DataTypes);
  var wp_redirection_404 = _wp_redirection_404(sequelize, DataTypes);
  var wp_options = _wp_options(sequelize, DataTypes);
  var wp_redirection_groups = _wp_redirection_groups(sequelize, DataTypes);
  var wp_redirection_logs = _wp_redirection_logs(sequelize, DataTypes);
  var wp_term_taxonomy = _wp_term_taxonomy(sequelize, DataTypes);
  var wp_term_relationships = _wp_term_relationships(sequelize, DataTypes);
  var wp_termmeta = _wp_termmeta(sequelize, DataTypes);
  var wp_usermeta = _wp_usermeta(sequelize, DataTypes);
  var wp_terms = _wp_terms(sequelize, DataTypes);
  var wp_wfblockediplog = _wp_wfblockediplog(sequelize, DataTypes);
  var wp_wfblocks7 = _wp_wfblocks7(sequelize, DataTypes);
  var wp_wffilemods = _wp_wffilemods(sequelize, DataTypes);
  var wp_wfcrawlers = _wp_wfcrawlers(sequelize, DataTypes);
  var wp_wfconfig = _wp_wfconfig(sequelize, DataTypes);
  var wp_wfissues = _wp_wfissues(sequelize, DataTypes);
  var wp_wfhoover = _wp_wfhoover(sequelize, DataTypes);
  var wp_wffilechanges = _wp_wffilechanges(sequelize, DataTypes);
  var wp_wflogins = _wp_wflogins(sequelize, DataTypes);
  var wp_wfknownfilelist = _wp_wfknownfilelist(sequelize, DataTypes);
  var wp_users = _wp_users(sequelize, DataTypes);
  var wp_wfhits = _wp_wfhits(sequelize, DataTypes);
  var wp_wfpendingissues = _wp_wfpendingissues(sequelize, DataTypes);
  var wp_wflocs = _wp_wflocs(sequelize, DataTypes);
  var wp_wfls_2fa_secrets = _wp_wfls_2fa_secrets(sequelize, DataTypes);
  var wp_wfls_settings = _wp_wfls_settings(sequelize, DataTypes);
  var wp_wfreversecache = _wp_wfreversecache(sequelize, DataTypes);
  var wp_wfsnipcache = _wp_wfsnipcache(sequelize, DataTypes);
  var wp_wflivetraffichuman = _wp_wflivetraffichuman(sequelize, DataTypes);
  var wp_wftrafficrates = _wp_wftrafficrates(sequelize, DataTypes);
  var wp_wfnotifications = _wp_wfnotifications(sequelize, DataTypes);
  var wp_wfstatus = _wp_wfstatus(sequelize, DataTypes);

  return {
    auth_group,
    auth_permission,
    auth_group_permissions,
    auth_user_groups,
    auth_user,
    wp_comments,
    auth_user_user_permissions,
    wp_postmeta,
    wp_commentmeta,
    wp_links,
    wp_redirection_items,
    wp_posts,
    wp_redirection_404,
    wp_options,
    wp_redirection_groups,
    wp_redirection_logs,
    wp_term_taxonomy,
    wp_term_relationships,
    wp_termmeta,
    wp_usermeta,
    wp_terms,
    wp_wfblockediplog,
    wp_wfblocks7,
    wp_wffilemods,
    wp_wfcrawlers,
    wp_wfconfig,
    wp_wfissues,
    wp_wfhoover,
    wp_wffilechanges,
    wp_wflogins,
    wp_wfknownfilelist,
    wp_users,
    wp_wfhits,
    wp_wfpendingissues,
    wp_wflocs,
    wp_wfls_2fa_secrets,
    wp_wfls_settings,
    wp_wfreversecache,
    wp_wfsnipcache,
    wp_wflivetraffichuman,
    wp_wftrafficrates,
    wp_wfnotifications,
    wp_wfstatus,
  };
}
module.exports = { initModels };
