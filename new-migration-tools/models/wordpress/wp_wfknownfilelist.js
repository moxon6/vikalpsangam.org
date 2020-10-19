/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfknownfilelist extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wfknownfilelist',
    timestamps: false
    });
  return wp_wfknownfilelist;
  }
}
