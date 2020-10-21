/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wffilechangesAttributes {
  filenameHash?: string;
  file?: string;
  md5?: string;
}

export class wp_wffilechanges extends Model<wp_wffilechangesAttributes, wp_wffilechangesAttributes> implements wp_wffilechangesAttributes {
  filenameHash?: string;
  file?: string;
  md5?: string;

  static initModel(sequelize: Sequelize) {
    wp_wffilechanges.init({
    filenameHash: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      primaryKey: true
    },
    file: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    md5: {
      type: DataTypes.CHAR(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wffilechanges',
    timestamps: false
    });
  return wp_wffilechanges;
  }
}
