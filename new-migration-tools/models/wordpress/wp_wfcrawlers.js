/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfcrawlers extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    patternSig: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.CHAR(8),
      allowNull: false
    },
    lastUpdate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    PTR: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_wfcrawlers',
    timestamps: false
    });
  return wp_wfcrawlers;
  }
}
