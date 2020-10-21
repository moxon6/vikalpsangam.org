/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_redirection_itemsAttributes {
  id?: number;
  url?: any;
  match_url?: string;
  match_data?: string;
  regex?: number;
  position?: number;
  last_count?: number;
  last_access?: Date;
  group_id?: number;
  status?: any;
  action_type?: string;
  action_code?: number;
  action_data?: any;
  match_type?: string;
  title?: string;
}

export class wp_redirection_items extends Model<wp_redirection_itemsAttributes, wp_redirection_itemsAttributes> implements wp_redirection_itemsAttributes {
  id?: number;
  url?: any;
  match_url?: string;
  match_data?: string;
  regex?: number;
  position?: number;
  last_count?: number;
  last_access?: Date;
  group_id?: number;
  status?: any;
  action_type?: string;
  action_code?: number;
  action_data?: any;
  match_type?: string;
  title?: string;

  static initModel(sequelize: Sequelize) {
    wp_redirection_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    match_url: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    match_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    regex: {
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    position: {
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    last_count: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    last_access: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    group_id: {
      type: DataTypes.INTEGER({length: 11}),
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('enabled','disabled'),
      allowNull: false,
      defaultValue: "enabled"
    },
    action_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    action_code: {
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false
    },
    action_data: {
      type: "MEDIUMTEXT",
      allowNull: true
    },
    match_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_redirection_items',
    timestamps: false
    });
  return wp_redirection_items;
  }
}
