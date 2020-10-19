/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfreversecache extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    host: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastUpdate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wfreversecache',
    timestamps: false
    });
  return wp_wfreversecache;
  }
}
