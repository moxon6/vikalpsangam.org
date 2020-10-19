/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfconfig extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    val: {
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
    tableName: 'wp_wfconfig',
    timestamps: false
    });
  return wp_wfconfig;
  }
}
