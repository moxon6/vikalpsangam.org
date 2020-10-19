/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfpendingissues extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lastUpdated: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    severity: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ignoreP: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    ignoreC: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    shortMsg: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    longMsg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfpendingissues',
    timestamps: false
    });
  return wp_wfpendingissues;
  }
}
