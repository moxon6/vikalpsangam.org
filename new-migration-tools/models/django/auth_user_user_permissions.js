/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_user_user_permissions extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "auth_user_user_permissions_user_id_key"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "auth_user_user_permissions_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_user_user_permissions',
    schema: 'public',
    timestamps: false
    });
  return auth_user_user_permissions;
  }
}
