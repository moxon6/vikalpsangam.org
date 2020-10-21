/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wffilemodsAttributes {
  filenameMD5?: any;
  filename?: string;
  knownFile?: number;
  oldMD5?: any;
  newMD5?: any;
  SHAC?: any;
  stoppedOnSignature?: string;
  stoppedOnPosition?: number;
  isSafeFile?: string;
}

export class wp_wffilemods extends Model<wp_wffilemodsAttributes, wp_wffilemodsAttributes> implements wp_wffilemodsAttributes {
  filenameMD5?: any;
  filename?: string;
  knownFile?: number;
  oldMD5?: any;
  newMD5?: any;
  SHAC?: any;
  stoppedOnSignature?: string;
  stoppedOnPosition?: number;
  isSafeFile?: string;

  static initModel(sequelize: Sequelize) {
    wp_wffilemods.init({
    filenameMD5: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    knownFile: {
      type: DataTypes.INTEGER({length: 3}).UNSIGNED,
      allowNull: false
    },
    oldMD5: {
      type: "BINARY(16)",
      allowNull: false
    },
    newMD5: {
      type: "BINARY(16)",
      allowNull: false
    },
    SHAC: {
      type: "BINARY(32)",
      allowNull: false,
      defaultValue: "                                "
    },
    stoppedOnSignature: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    stoppedOnPosition: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    isSafeFile: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "?"
    }
  }, {
    sequelize,
    tableName: 'wp_wffilemods',
    timestamps: false
    });
  return wp_wffilemods;
  }
}
