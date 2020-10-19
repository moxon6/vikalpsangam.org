/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_permission extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      },
      unique: "auth_permission_content_type_id_key"
    },
    codename: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "auth_permission_content_type_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_permission',
    schema: 'public',
    timestamps: false
    });
  return auth_permission;
  }
}
