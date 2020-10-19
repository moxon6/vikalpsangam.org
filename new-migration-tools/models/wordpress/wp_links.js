/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_links extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    link_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    link_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_target: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    link_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_visible: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "Y"
    },
    link_owner: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    link_rating: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    link_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    link_rel: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_notes: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    link_rss: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_links',
    timestamps: false
    });
  return wp_links;
  }
}
