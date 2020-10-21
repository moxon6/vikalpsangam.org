/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_linksAttributes {
  link_id?: number;
  link_url?: string;
  link_name?: string;
  link_image?: string;
  link_target?: string;
  link_description?: string;
  link_visible?: string;
  link_owner?: number;
  link_rating?: number;
  link_updated?: Date;
  link_rel?: string;
  link_notes?: any;
  link_rss?: string;
}

export class wp_links extends Model<wp_linksAttributes, wp_linksAttributes> implements wp_linksAttributes {
  link_id?: number;
  link_url?: string;
  link_name?: string;
  link_image?: string;
  link_target?: string;
  link_description?: string;
  link_visible?: string;
  link_owner?: number;
  link_rating?: number;
  link_updated?: Date;
  link_rel?: string;
  link_notes?: any;
  link_rss?: string;

  static initModel(sequelize: Sequelize) {
    wp_links.init({
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
