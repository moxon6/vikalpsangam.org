/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfknownfilelistAttributes {
  id?: number;
  path?: string;
}

export class wp_wfknownfilelist extends Model<wp_wfknownfilelistAttributes, wp_wfknownfilelistAttributes> implements wp_wfknownfilelistAttributes {
  id?: number;
  path?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfknownfilelist.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wfknownfilelist',
    timestamps: false
    });
  return wp_wfknownfilelist;
  }
}
