/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfhoover extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    host: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hostKey: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfhoover',
    timestamps: false
    });
  return wp_wfhoover;
  }
}
