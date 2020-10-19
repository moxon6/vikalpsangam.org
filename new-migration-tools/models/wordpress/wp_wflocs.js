/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wflocs extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    ctime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    failed: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
