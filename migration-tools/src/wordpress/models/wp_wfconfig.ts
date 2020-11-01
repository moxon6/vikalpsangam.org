/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfconfigAttributes {
  name?: string;
  val?: any;
  autoload?: any;
}

export class wp_wfconfig extends Model<wp_wfconfigAttributes, wp_wfconfigAttributes> implements wp_wfconfigAttributes {
  name?: string;
  val?: any;
  autoload?: any;

  static initModel(sequelize: Sequelize) {
    wp_wfconfig.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    val: {
      type: "LONGBLOB",
      allowNull: true
    },
    autoload: {
      type: DataTypes.ENUM('no','yes'),
      allowNull: false,
      defaultValue: "yes"
    }
  }, {
    sequelize,
    tableName: 'wp_wfconfig',
    timestamps: false
    });
  return wp_wfconfig;
  }
}
