/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfhooverAttributes {
  id?: number;
  owner?: string;
  host?: string;
  path?: string;
  hostKey?: any;
}

export class wp_wfhoover extends Model<wp_wfhooverAttributes, wp_wfhooverAttributes> implements wp_wfhooverAttributes {
  id?: number;
  owner?: string;
  host?: string;
  path?: string;
  hostKey?: any;

  static initModel(sequelize: Sequelize) {
    wp_wfhoover.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    host: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hostKey: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfhoover',
    timestamps: false
    });
  return wp_wfhoover;
  }
}
