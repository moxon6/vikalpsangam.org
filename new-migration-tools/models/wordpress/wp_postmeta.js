/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_postmeta extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    meta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_value: {
      type: "LONGTEXT",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_postmeta',
    timestamps: false
    });
  return wp_postmeta;
  }
}
