/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfloginsAttributes {
  id?: number;
  hitID?: number;
  ctime?: number;
  fail?: number;
  action?: string;
  username?: string;
  userID?: number;
  IP?: any;
  UA?: string;
}

export class wp_wflogins extends Model<wp_wfloginsAttributes, wp_wfloginsAttributes> implements wp_wfloginsAttributes {
  id?: number;
  hitID?: number;
  ctime?: number;
  fail?: number;
  action?: string;
  username?: string;
  userID?: number;
  IP?: any;
  UA?: string;

  static initModel(sequelize: Sequelize) {
    wp_wflogins.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hitID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ctime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    fail: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IP: {
      type: "BINARY(16)",
      allowNull: true
    },
    UA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wflogins',
    timestamps: false
    });
  return wp_wflogins;
  }
}
