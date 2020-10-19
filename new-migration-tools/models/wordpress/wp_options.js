/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_options extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
