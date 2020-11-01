/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_optionsAttributes {
  option_id?: number;
  option_name?: string;
  option_value?: any;
  autoload?: string;
}

export class wp_options extends Model<wp_optionsAttributes, wp_optionsAttributes> implements wp_optionsAttributes {
  option_id?: number;
  option_name?: string;
  option_value?: any;
  autoload?: string;

  static initModel(sequelize: Sequelize) {
    wp_options.init({
    option_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    option_name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
      unique: "option_name"
    },
    option_value: {
      type: "LONGTEXT",
      allowNull: false
    },
    autoload: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "yes"
    }
  }, {
    sequelize,
    tableName: 'wp_options',
    timestamps: false
    });
  return wp_options;
  }
}
