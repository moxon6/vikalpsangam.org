/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfhitsAttributes {
  id?: number;
  attackLogTime?: number;
  ctime?: number;
  IP?: any;
  jsRun?: number;
  statusCode?: number;
  isGoogle?: number;
  userID?: number;
  newVisit?: number;
  URL?: string;
  referer?: string;
  UA?: string;
  action?: string;
  actionDescription?: string;
  actionData?: string;
}

export class wp_wfhits extends Model<wp_wfhitsAttributes, wp_wfhitsAttributes> implements wp_wfhitsAttributes {
  id?: number;
  attackLogTime?: number;
  ctime?: number;
  IP?: any;
  jsRun?: number;
  statusCode?: number;
  isGoogle?: number;
  userID?: number;
  newVisit?: number;
  URL?: string;
  referer?: string;
  UA?: string;
  action?: string;
  actionDescription?: string;
  actionData?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfhits.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    attackLogTime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ctime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    IP: {
      type: "BINARY(16)",
      allowNull: true
    },
    jsRun: {
      type: DataTypes.INTEGER({length: 4}),
      allowNull: true,
      defaultValue: 0
    },
    statusCode: {
      type: DataTypes.INTEGER({length: 11}),
      allowNull: false,
      defaultValue: 200
    },
    isGoogle: {
      type: DataTypes.INTEGER({length: 4}),
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    },
    newVisit: {
      type: DataTypes.INTEGER({length: 3}).UNSIGNED,
      allowNull: false
    },
    URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    actionDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    actionData: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfhits',
    timestamps: false
    });
  return wp_wfhits;
  }
}
