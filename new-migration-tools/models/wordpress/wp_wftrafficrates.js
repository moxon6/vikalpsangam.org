/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wftrafficrates extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    eMin: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    hitType: {
      type: DataTypes.ENUM('hit','404'),
      allowNull: false,
      defaultValue: "hit",
      primaryKey: true
    },
    hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wftrafficrates',
    timestamps: false
    });
  return wp_wftrafficrates;
  }
}
