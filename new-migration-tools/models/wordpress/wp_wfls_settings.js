/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfls_settings extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    value: {
      type: "LONGBLOB",
      allowNull: true
    },
    autoload: {
      type: DataTypes.ENUM('no','yes'),
      allowNull: false,
      defaultValue: "yes"
    }
  }, {
    sequelize,
    tableName: 'wp_wfls_settings',
    timestamps: false
    });
  return wp_wfls_settings;
  }
}
