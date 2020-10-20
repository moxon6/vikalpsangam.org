var DataTypes = require("sequelize").DataTypes;
var _auth_permission = require("./auth_permission");
var _auth_group_permissions = require("./auth_group_permissions");
var _auth_group = require("./auth_group");
var _auth_user = require("./auth_user");
var _auth_user_groups = require("./auth_user_groups");
var _auth_user_user_permissions = require("./auth_user_user_permissions");
var _wp_comments = require("./wp_comments");
var _wp_import_log_detail = require("./wp_import_log_detail");
var _wp_import_detail_log = require("./wp_import_detail_log");
var _wp_commentmeta = require("./wp_commentmeta");
var _wp_postmeta = require("./wp_postmeta");
var _wp_posts = require("./wp_posts");
var _wp_links = require("./wp_links");
var _wp_options = require("./wp_options");
var _wp_import_postID = require("./wp_import_postID");
var _wp_redirection_items = require("./wp_redirection_items");
var _wp_redirection_logs = require("./wp_redirection_logs");
var _wp_smackuci_events = require("./wp_smackuci_events");
var _wp_redirection_groups = require("./wp_redirection_groups");
var _wp_term_relationships = require("./wp_term_relationships");
var _wp_termmeta = require("./wp_termmeta");
var _wp_term_taxonomy = require("./wp_term_taxonomy");
var _wp_redirection_404 = require("./wp_redirection_404");
var _wp_ultimate_csv_importer_mappingtemplate = require("./wp_ultimate_csv_importer_mappingtemplate");
var _wp_terms = require("./wp_terms");
var _wp_ultimate_csv_importer_media = require("./wp_ultimate_csv_importer_media");
var _wp_smackcsv_file_events = require("./wp_smackcsv_file_events");
var _wp_ultimate_csv_importer_acf_fields = require("./wp_ultimate_csv_importer_acf_fields");
var _wp_users = require("./wp_users");
var _wp_usermeta = require("./wp_usermeta");
var _wp_ultimate_csv_importer_shortcode_manager = require("./wp_ultimate_csv_importer_shortcode_manager");
var _wp_wffilechanges = require("./wp_wffilechanges");
var _wp_wfblocks7 = require("./wp_wfblocks7");
var _wp_wfcrawlers = require("./wp_wfcrawlers");
var _wp_wfblockediplog = require("./wp_wfblockediplog");
var _wp_wfconfig = require("./wp_wfconfig");
var _wp_wfhits = require("./wp_wfhits");
var _wp_wfhoover = require("./wp_wfhoover");
var _wp_wffilemods = require("./wp_wffilemods");
var _wp_wfknownfilelist = require("./wp_wfknownfilelist");
var _wp_wflogins = require("./wp_wflogins");
var _wp_wflocs = require("./wp_wflocs");
var _wp_wflivetraffichuman = require("./wp_wflivetraffichuman");
var _wp_wfls_2fa_secrets = require("./wp_wfls_2fa_secrets");
var _wp_wfls_settings = require("./wp_wfls_settings");
var _wp_wfpendingissues = require("./wp_wfpendingissues");
var _wp_wfissues = require("./wp_wfissues");
var _wp_wfsnipcache = require("./wp_wfsnipcache");
var _wp_wfstatus = require("./wp_wfstatus");
var _wp_wfreversecache = require("./wp_wfreversecache");
var _wp_wfnotifications = require("./wp_wfnotifications");
var _wp_wftrafficrates = require("./wp_wftrafficrates");

function initModels(sequelize) {
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var wp_comments = _wp_comments(sequelize, DataTypes);
  var wp_import_log_detail = _wp_import_log_detail(sequelize, DataTypes);
  var wp_import_detail_log = _wp_import_detail_log(sequelize, DataTypes);
  var wp_commentmeta = _wp_commentmeta(sequelize, DataTypes);
  var wp_postmeta = _wp_postmeta(sequelize, DataTypes);
  var wp_posts = _wp_posts(sequelize, DataTypes);
  var wp_links = _wp_links(sequelize, DataTypes);
  var wp_options = _wp_options(sequelize, DataTypes);
  var wp_import_postID = _wp_import_postID(sequelize, DataTypes);
  var wp_redirection_items = _wp_redirection_items(sequelize, DataTypes);
  var wp_redirection_logs = _wp_redirection_logs(sequelize, DataTypes);
  var wp_smackuci_events = _wp_smackuci_events(sequelize, DataTypes);
  var wp_redirection_groups = _wp_redirection_groups(sequelize, DataTypes);
  var wp_term_relationships = _wp_term_relationships(sequelize, DataTypes);
  var wp_termmeta = _wp_termmeta(sequelize, DataTypes);
  var wp_term_taxonomy = _wp_term_taxonomy(sequelize, DataTypes);
  var wp_redirection_404 = _wp_redirection_404(sequelize, DataTypes);
  var wp_ultimate_csv_importer_mappingtemplate = _wp_ultimate_csv_importer_mappingtemplate(sequelize, DataTypes);
  var wp_terms = _wp_terms(sequelize, DataTypes);
  var wp_ultimate_csv_importer_media = _wp_ultimate_csv_importer_media(sequelize, DataTypes);
  var wp_smackcsv_file_events = _wp_smackcsv_file_events(sequelize, DataTypes);
  var wp_ultimate_csv_importer_acf_fields = _wp_ultimate_csv_importer_acf_fields(sequelize, DataTypes);
  var wp_users = _wp_users(sequelize, DataTypes);
  var wp_usermeta = _wp_usermeta(sequelize, DataTypes);
  var wp_ultimate_csv_importer_shortcode_manager = _wp_ultimate_csv_importer_shortcode_manager(sequelize, DataTypes);
  var wp_wffilechanges = _wp_wffilechanges(sequelize, DataTypes);
  var wp_wfblocks7 = _wp_wfblocks7(sequelize, DataTypes);
  var wp_wfcrawlers = _wp_wfcrawlers(sequelize, DataTypes);
  var wp_wfblockediplog = _wp_wfblockediplog(sequelize, DataTypes);
  var wp_wfconfig = _wp_wfconfig(sequelize, DataTypes);
  var wp_wfhits = _wp_wfhits(sequelize, DataTypes);
  var wp_wfhoover = _wp_wfhoover(sequelize, DataTypes);
  var wp_wffilemods = _wp_wffilemods(sequelize, DataTypes);
  var wp_wfknownfilelist = _wp_wfknownfilelist(sequelize, DataTypes);
  var wp_wflogins = _wp_wflogins(sequelize, DataTypes);
  var wp_wflocs = _wp_wflocs(sequelize, DataTypes);
  var wp_wflivetraffichuman = _wp_wflivetraffichuman(sequelize, DataTypes);
  var wp_wfls_2fa_secrets = _wp_wfls_2fa_secrets(sequelize, DataTypes);
  var wp_wfls_settings = _wp_wfls_settings(sequelize, DataTypes);
  var wp_wfpendingissues = _wp_wfpendingissues(sequelize, DataTypes);
  var wp_wfissues = _wp_wfissues(sequelize, DataTypes);
  var wp_wfsnipcache = _wp_wfsnipcache(sequelize, DataTypes);
  var wp_wfstatus = _wp_wfstatus(sequelize, DataTypes);
  var wp_wfreversecache = _wp_wfreversecache(sequelize, DataTypes);
  var wp_wfnotifications = _wp_wfnotifications(sequelize, DataTypes);
  var wp_wftrafficrates = _wp_wftrafficrates(sequelize, DataTypes);

  return {
    auth_permission,
    auth_group_permissions,
    auth_group,
    auth_user,
    auth_user_groups,
    auth_user_user_permissions,
    wp_comments,
    wp_import_log_detail,
    wp_import_detail_log,
    wp_commentmeta,
    wp_postmeta,
    wp_posts,
    wp_links,
    wp_options,
    wp_import_postID,
    wp_redirection_items,
    wp_redirection_logs,
    wp_smackuci_events,
    wp_redirection_groups,
    wp_term_relationships,
    wp_termmeta,
    wp_term_taxonomy,
    wp_redirection_404,
    wp_ultimate_csv_importer_mappingtemplate,
    wp_terms,
    wp_ultimate_csv_importer_media,
    wp_smackcsv_file_events,
    wp_ultimate_csv_importer_acf_fields,
    wp_users,
    wp_usermeta,
    wp_ultimate_csv_importer_shortcode_manager,
    wp_wffilechanges,
    wp_wfblocks7,
    wp_wfcrawlers,
    wp_wfblockediplog,
    wp_wfconfig,
    wp_wfhits,
    wp_wfhoover,
    wp_wffilemods,
    wp_wfknownfilelist,
    wp_wflogins,
    wp_wflocs,
    wp_wflivetraffichuman,
    wp_wfls_2fa_secrets,
    wp_wfls_settings,
    wp_wfpendingissues,
    wp_wfissues,
    wp_wfsnipcache,
    wp_wfstatus,
    wp_wfreversecache,
    wp_wfnotifications,
    wp_wftrafficrates,
  };
}
module.exports = { initModels };
