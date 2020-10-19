/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfhits extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
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
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: 0
    },
    statusCode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 200
    },
    isGoogle: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    newVisit: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
