/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_redirection_logsAttributes {
  id?: number;
  created?: Date;
  url?: any;
  sent_to?: any;
  agent?: any;
  referrer?: any;
  redirection_id?: number;
  ip?: string;
  module_id?: number;
  group_id?: number;
}

export class wp_redirection_logs extends Model<wp_redirection_logsAttributes, wp_redirection_logsAttributes> implements wp_redirection_logsAttributes {
  id?: number;
  created?: Date;
  url?: any;
  sent_to?: any;
  agent?: any;
  referrer?: any;
  redirection_id?: number;
  ip?: string;
  module_id?: number;
  group_id?: number;

  static initModel(sequelize: Sequelize) {
    wp_redirection_logs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    url: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    sent_to: {
      type: "MEDIUMTEXT",
      allowNull: true
    },
    agent: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    referrer: {
      type: "MEDIUMTEXT",
      allowNull: true
    },
    redirection_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    module_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_redirection_logs',
    timestamps: false
    });
  return wp_redirection_logs;
  }
}
