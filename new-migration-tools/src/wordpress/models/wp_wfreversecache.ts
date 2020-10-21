/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfreversecacheAttributes {
  IP?: any;
  host?: string;
  lastUpdate?: number;
}

export class wp_wfreversecache extends Model<wp_wfreversecacheAttributes, wp_wfreversecacheAttributes> implements wp_wfreversecacheAttributes {
  IP?: any;
  host?: string;
  lastUpdate?: number;

  static initModel(sequelize: Sequelize) {
    wp_wfreversecache.init({
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
