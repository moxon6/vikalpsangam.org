/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wffilechanges extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    filenameHash: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      primaryKey: true
    },
    file: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    md5: {
      type: DataTypes.CHAR(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wffilechanges',
    timestamps: false
    });
  return wp_wffilechanges;
  }
}
