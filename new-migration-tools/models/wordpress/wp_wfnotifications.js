/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfnotifications extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    new: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 1000
    },
    ctime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    links: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wfnotifications',
    timestamps: false
    });
  return wp_wfnotifications;
  }
}
