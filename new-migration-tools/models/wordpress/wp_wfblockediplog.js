/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfblockediplog extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    countryCode: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    blockCount: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    unixday: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    blockType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "generic",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfblockediplog',
    timestamps: false
    });
  return wp_wfblockediplog;
  }
}
