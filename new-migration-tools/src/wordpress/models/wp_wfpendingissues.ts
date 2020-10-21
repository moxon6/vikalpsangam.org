/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfpendingissuesAttributes {
  id?: number;
  time?: number;
  lastUpdated?: number;
  status?: string;
  type?: string;
  severity?: number;
  ignoreP?: string;
  ignoreC?: string;
  shortMsg?: string;
  longMsg?: string;
  data?: string;
}

export class wp_wfpendingissues extends Model<wp_wfpendingissuesAttributes, wp_wfpendingissuesAttributes> implements wp_wfpendingissuesAttributes {
  id?: number;
  time?: number;
  lastUpdated?: number;
  status?: string;
  type?: string;
  severity?: number;
  ignoreP?: string;
  ignoreC?: string;
  shortMsg?: string;
  longMsg?: string;
  data?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfpendingissues.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lastUpdated: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    severity: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ignoreP: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    ignoreC: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    shortMsg: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    longMsg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfpendingissues',
    timestamps: false
    });
  return wp_wfpendingissues;
  }
}
