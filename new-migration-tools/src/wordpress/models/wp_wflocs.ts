/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wflocsAttributes {
  IP?: any;
  ctime?: number;
  failed?: number;
  city?: string;
  region?: string;
  countryName?: string;
  countryCode?: string;
  lat?: number;
  lon?: number;
}

export class wp_wflocs extends Model<wp_wflocsAttributes, wp_wflocsAttributes> implements wp_wflocsAttributes {
  IP?: any;
  ctime?: number;
  failed?: number;
  city?: string;
  region?: string;
  countryName?: string;
  countryCode?: string;
  lat?: number;
  lon?: number;

  static initModel(sequelize: Sequelize) {
    wp_wflocs.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    ctime: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    },
    failed: {
      type: DataTypes.INTEGER({length: 3}).UNSIGNED,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    countryName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    countryCode: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ""
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0000000
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0000000
    }
  }, {
    sequelize,
    tableName: 'wp_wflocs',
    timestamps: false
    });
  return wp_wflocs;
  }
}
