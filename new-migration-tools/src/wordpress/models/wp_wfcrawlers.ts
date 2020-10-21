/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfcrawlersAttributes {
  IP?: any;
  patternSig?: any;
  status?: string;
  lastUpdate?: number;
  PTR?: string;
}

export class wp_wfcrawlers extends Model<wp_wfcrawlersAttributes, wp_wfcrawlersAttributes> implements wp_wfcrawlersAttributes {
  IP?: any;
  patternSig?: any;
  status?: string;
  lastUpdate?: number;
  PTR?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfcrawlers.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    patternSig: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.CHAR(8),
      allowNull: false
    },
    lastUpdate: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    },
    PTR: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_wfcrawlers',
    timestamps: false
    });
  return wp_wfcrawlers;
  }
}
