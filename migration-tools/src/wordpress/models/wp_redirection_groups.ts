/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_redirection_groupsAttributes {
  id?: number;
  name?: string;
  tracking?: number;
  module_id?: number;
  status?: any;
  position?: number;
}

export class wp_redirection_groups extends Model<wp_redirection_groupsAttributes, wp_redirection_groupsAttributes> implements wp_redirection_groupsAttributes {
  id?: number;
  name?: string;
  tracking?: number;
  module_id?: number;
  status?: any;
  position?: number;

  static initModel(sequelize: Sequelize) {
    wp_redirection_groups.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tracking: {
      type: DataTypes.INTEGER({length: 11}),
      allowNull: false,
      defaultValue: 1
    },
    module_id: {
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('enabled','disabled'),
      allowNull: false,
      defaultValue: "enabled"
    },
    position: {
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_redirection_groups',
    timestamps: false
    });
  return wp_redirection_groups;
  }
}
