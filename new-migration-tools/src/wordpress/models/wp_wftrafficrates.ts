/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wftrafficratesAttributes {
  eMin?: number;
  IP?: any;
  hitType?: any;
  hits?: number;
}

export class wp_wftrafficrates extends Model<wp_wftrafficratesAttributes, wp_wftrafficratesAttributes> implements wp_wftrafficratesAttributes {
  eMin?: number;
  IP?: any;
  hitType?: any;
  hits?: number;

  static initModel(sequelize: Sequelize) {
    wp_wftrafficrates.init({
    eMin: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    hitType: {
      type: DataTypes.ENUM('hit','404'),
      allowNull: false,
      defaultValue: "hit",
      primaryKey: true
    },
    hits: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wftrafficrates',
    timestamps: false
    });
  return wp_wftrafficrates;
  }
}
