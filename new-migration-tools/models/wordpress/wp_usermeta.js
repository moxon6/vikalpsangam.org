/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_usermeta extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    umeta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
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
    tableName: 'wp_usermeta',
    timestamps: false
    });
  return wp_usermeta;
  }
}
