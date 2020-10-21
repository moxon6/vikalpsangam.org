import { Sequelize } from "sequelize";
import { auth_permission, auth_permissionAttributes } from "./auth_permission";
import { auth_group_permissions, auth_group_permissionsAttributes } from "./auth_group_permissions";
import { auth_group, auth_groupAttributes } from "./auth_group";
import { auth_user, auth_userAttributes } from "./auth_user";
import { wp_links, wp_linksAttributes } from "./wp_links";
import { auth_user_groups, auth_user_groupsAttributes } from "./auth_user_groups";
import { auth_user_user_permissions, auth_user_user_permissionsAttributes } from "./auth_user_user_permissions";
import { wp_comments, wp_commentsAttributes } from "./wp_comments";
import { wp_postmeta, wp_postmetaAttributes } from "./wp_postmeta";
import { wp_commentmeta, wp_commentmetaAttributes } from "./wp_commentmeta";
import { wp_redirection_groups, wp_redirection_groupsAttributes } from "./wp_redirection_groups";
import { wp_posts, wp_postsAttributes } from "./wp_posts";
import { wp_redirection_items, wp_redirection_itemsAttributes } from "./wp_redirection_items";
import { wp_redirection_logs, wp_redirection_logsAttributes } from "./wp_redirection_logs";
import { wp_terms, wp_termsAttributes } from "./wp_terms";
import { wp_redirection_404, wp_redirection_404Attributes } from "./wp_redirection_404";
import { wp_options, wp_optionsAttributes } from "./wp_options";
import { wp_term_relationships, wp_term_relationshipsAttributes } from "./wp_term_relationships";
import { wp_usermeta, wp_usermetaAttributes } from "./wp_usermeta";
import { wp_term_taxonomy, wp_term_taxonomyAttributes } from "./wp_term_taxonomy";
import { wp_termmeta, wp_termmetaAttributes } from "./wp_termmeta";
import { wp_wfconfig, wp_wfconfigAttributes } from "./wp_wfconfig";
import { wp_wfcrawlers, wp_wfcrawlersAttributes } from "./wp_wfcrawlers";
import { wp_wfblockediplog, wp_wfblockediplogAttributes } from "./wp_wfblockediplog";
import { wp_wffilechanges, wp_wffilechangesAttributes } from "./wp_wffilechanges";
import { wp_users, wp_usersAttributes } from "./wp_users";
import { wp_wffilemods, wp_wffilemodsAttributes } from "./wp_wffilemods";
import { wp_wfblocks7, wp_wfblocks7Attributes } from "./wp_wfblocks7";
import { wp_wflivetraffichuman, wp_wflivetraffichumanAttributes } from "./wp_wflivetraffichuman";
import { wp_wfhits, wp_wfhitsAttributes } from "./wp_wfhits";
import { wp_wfknownfilelist, wp_wfknownfilelistAttributes } from "./wp_wfknownfilelist";
import { wp_wfhoover, wp_wfhooverAttributes } from "./wp_wfhoover";
import { wp_wfls_2fa_secrets, wp_wfls_2fa_secretsAttributes } from "./wp_wfls_2fa_secrets";
import { wp_wflocs, wp_wflocsAttributes } from "./wp_wflocs";
import { wp_wfnotifications, wp_wfnotificationsAttributes } from "./wp_wfnotifications";
import { wp_wfissues, wp_wfissuesAttributes } from "./wp_wfissues";
import { wp_wfls_settings, wp_wfls_settingsAttributes } from "./wp_wfls_settings";
import { wp_wfpendingissues, wp_wfpendingissuesAttributes } from "./wp_wfpendingissues";
import { wp_wfreversecache, wp_wfreversecacheAttributes } from "./wp_wfreversecache";
import { wp_wflogins, wp_wfloginsAttributes } from "./wp_wflogins";
import { wp_wftrafficrates, wp_wftrafficratesAttributes } from "./wp_wftrafficrates";
import { wp_wfstatus, wp_wfstatusAttributes } from "./wp_wfstatus";
import { wp_wfsnipcache, wp_wfsnipcacheAttributes } from "./wp_wfsnipcache";

export {
  auth_permission, auth_permissionAttributes,
  auth_group_permissions, auth_group_permissionsAttributes,
  auth_group, auth_groupAttributes,
  auth_user, auth_userAttributes,
  wp_links, wp_linksAttributes,
  auth_user_groups, auth_user_groupsAttributes,
  auth_user_user_permissions, auth_user_user_permissionsAttributes,
  wp_comments, wp_commentsAttributes,
  wp_postmeta, wp_postmetaAttributes,
  wp_commentmeta, wp_commentmetaAttributes,
  wp_redirection_groups, wp_redirection_groupsAttributes,
  wp_posts, wp_postsAttributes,
  wp_redirection_items, wp_redirection_itemsAttributes,
  wp_redirection_logs, wp_redirection_logsAttributes,
  wp_terms, wp_termsAttributes,
  wp_redirection_404, wp_redirection_404Attributes,
  wp_options, wp_optionsAttributes,
  wp_term_relationships, wp_term_relationshipsAttributes,
  wp_usermeta, wp_usermetaAttributes,
  wp_term_taxonomy, wp_term_taxonomyAttributes,
  wp_termmeta, wp_termmetaAttributes,
  wp_wfconfig, wp_wfconfigAttributes,
  wp_wfcrawlers, wp_wfcrawlersAttributes,
  wp_wfblockediplog, wp_wfblockediplogAttributes,
  wp_wffilechanges, wp_wffilechangesAttributes,
  wp_users, wp_usersAttributes,
  wp_wffilemods, wp_wffilemodsAttributes,
  wp_wfblocks7, wp_wfblocks7Attributes,
  wp_wflivetraffichuman, wp_wflivetraffichumanAttributes,
  wp_wfhits, wp_wfhitsAttributes,
  wp_wfknownfilelist, wp_wfknownfilelistAttributes,
  wp_wfhoover, wp_wfhooverAttributes,
  wp_wfls_2fa_secrets, wp_wfls_2fa_secretsAttributes,
  wp_wflocs, wp_wflocsAttributes,
  wp_wfnotifications, wp_wfnotificationsAttributes,
  wp_wfissues, wp_wfissuesAttributes,
  wp_wfls_settings, wp_wfls_settingsAttributes,
  wp_wfpendingissues, wp_wfpendingissuesAttributes,
  wp_wfreversecache, wp_wfreversecacheAttributes,
  wp_wflogins, wp_wfloginsAttributes,
  wp_wftrafficrates, wp_wftrafficratesAttributes,
  wp_wfstatus, wp_wfstatusAttributes,
  wp_wfsnipcache, wp_wfsnipcacheAttributes,
};

export function initModels(sequelize: Sequelize) {
  auth_permission.initModel(sequelize);
  auth_group_permissions.initModel(sequelize);
  auth_group.initModel(sequelize);
  auth_user.initModel(sequelize);
  wp_links.initModel(sequelize);
  auth_user_groups.initModel(sequelize);
  auth_user_user_permissions.initModel(sequelize);
  wp_comments.initModel(sequelize);
  wp_postmeta.initModel(sequelize);
  wp_commentmeta.initModel(sequelize);
  wp_redirection_groups.initModel(sequelize);
  wp_posts.initModel(sequelize);
  wp_redirection_items.initModel(sequelize);
  wp_redirection_logs.initModel(sequelize);
  wp_terms.initModel(sequelize);
  wp_redirection_404.initModel(sequelize);
  wp_options.initModel(sequelize);
  wp_term_relationships.initModel(sequelize);
  wp_usermeta.initModel(sequelize);
  wp_term_taxonomy.initModel(sequelize);
  wp_termmeta.initModel(sequelize);
  wp_wfconfig.initModel(sequelize);
  wp_wfcrawlers.initModel(sequelize);
  wp_wfblockediplog.initModel(sequelize);
  wp_wffilechanges.initModel(sequelize);
  wp_users.initModel(sequelize);
  wp_wffilemods.initModel(sequelize);
  wp_wfblocks7.initModel(sequelize);
  wp_wflivetraffichuman.initModel(sequelize);
  wp_wfhits.initModel(sequelize);
  wp_wfknownfilelist.initModel(sequelize);
  wp_wfhoover.initModel(sequelize);
  wp_wfls_2fa_secrets.initModel(sequelize);
  wp_wflocs.initModel(sequelize);
  wp_wfnotifications.initModel(sequelize);
  wp_wfissues.initModel(sequelize);
  wp_wfls_settings.initModel(sequelize);
  wp_wfpendingissues.initModel(sequelize);
  wp_wfreversecache.initModel(sequelize);
  wp_wflogins.initModel(sequelize);
  wp_wftrafficrates.initModel(sequelize);
  wp_wfstatus.initModel(sequelize);
  wp_wfsnipcache.initModel(sequelize);

  return {
    auth_permission,
    auth_group_permissions,
    auth_group,
    auth_user,
    wp_links,
    auth_user_groups,
    auth_user_user_permissions,
    wp_comments,
    wp_postmeta,
    wp_commentmeta,
    wp_redirection_groups,
    wp_posts,
    wp_redirection_items,
    wp_redirection_logs,
    wp_terms,
    wp_redirection_404,
    wp_options,
    wp_term_relationships,
    wp_usermeta,
    wp_term_taxonomy,
    wp_termmeta,
    wp_wfconfig,
    wp_wfcrawlers,
    wp_wfblockediplog,
    wp_wffilechanges,
    wp_users,
    wp_wffilemods,
    wp_wfblocks7,
    wp_wflivetraffichuman,
    wp_wfhits,
    wp_wfknownfilelist,
    wp_wfhoover,
    wp_wfls_2fa_secrets,
    wp_wflocs,
    wp_wfnotifications,
    wp_wfissues,
    wp_wfls_settings,
    wp_wfpendingissues,
    wp_wfreversecache,
    wp_wflogins,
    wp_wftrafficrates,
    wp_wfstatus,
    wp_wfsnipcache,
  };
}
