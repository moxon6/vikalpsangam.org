/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wflivetraffichuman extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    identifier: {
      type: "BINARY(32)",
      allowNull: false,
      defaultValue: "                                ",
      primaryKey: true
    },
    expiration: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wflivetraffichuman',
    timestamps: false
    });
  return wp_wflivetraffichuman;
  }
}
