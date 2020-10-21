/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfls_settingsAttributes {
  name?: string;
  value?: any;
  autoload?: any;
}

export class wp_wfls_settings extends Model<wp_wfls_settingsAttributes, wp_wfls_settingsAttributes> implements wp_wfls_settingsAttributes {
  name?: string;
  value?: any;
  autoload?: any;

  static initModel(sequelize: Sequelize) {
    wp_wfls_settings.init({
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    value: {
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
    tableName: 'wp_wfls_settings',
    timestamps: false
    });
  return wp_wfls_settings;
  }
}
