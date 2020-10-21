/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfblocks7Attributes {
  id?: number;
  type?: number;
  IP?: any;
  blockedTime?: number;
  reason?: string;
  lastAttempt?: number;
  blockedHits?: number;
  expiration?: number;
  parameters?: string;
}

export class wp_wfblocks7 extends Model<wp_wfblocks7Attributes, wp_wfblocks7Attributes> implements wp_wfblocks7Attributes {
  id?: number;
  type?: number;
  IP?: any;
  blockedTime?: number;
  reason?: string;
  lastAttempt?: number;
  blockedHits?: number;
  expiration?: number;
  parameters?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfblocks7.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
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
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    blockedHits: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
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
