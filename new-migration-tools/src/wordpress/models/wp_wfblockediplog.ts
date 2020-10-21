/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfblockediplogAttributes {
  IP?: any;
  countryCode?: string;
  blockCount?: number;
  unixday?: number;
  blockType?: string;
}

export class wp_wfblockediplog extends Model<wp_wfblockediplogAttributes, wp_wfblockediplogAttributes> implements wp_wfblockediplogAttributes {
  IP?: any;
  countryCode?: string;
  blockCount?: number;
  unixday?: number;
  blockType?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfblockediplog.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    countryCode: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    blockCount: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    unixday: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    blockType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "generic",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfblockediplog',
    timestamps: false
    });
  return wp_wfblockediplog;
  }
}
