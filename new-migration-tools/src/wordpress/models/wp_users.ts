/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_usersAttributes {
  ID?: number;
  user_login?: string;
  user_pass?: string;
  user_nicename?: string;
  user_email?: string;
  user_url?: string;
  user_registered?: Date;
  user_activation_key?: string;
  user_status?: number;
  display_name?: string;
}

export class wp_users extends Model<wp_usersAttributes, wp_usersAttributes> implements wp_usersAttributes {
  ID?: number;
  user_login?: string;
  user_pass?: string;
  user_nicename?: string;
  user_email?: string;
  user_url?: string;
  user_registered?: Date;
  user_activation_key?: string;
  user_status?: number;
  display_name?: string;

  static initModel(sequelize: Sequelize) {
    wp_users.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_login: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    user_pass: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_nicename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    user_url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    user_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    user_activation_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    display_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_users',
    timestamps: false
    });
  return wp_users;
  }
}
