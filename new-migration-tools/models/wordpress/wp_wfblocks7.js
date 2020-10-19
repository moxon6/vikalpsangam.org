/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfblocks7 extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                "
    },
    blockedTime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastAttempt: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    blockedHits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    expiration: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    parameters: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfblocks7',
    timestamps: false
    });
  return wp_wfblocks7;
  }
}
