/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_group_permissions extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "auth_group_permissions_group_id_key"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "auth_group_permissions_group_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_group_permissions',
    schema: 'public',
    timestamps: false
    });
  return auth_group_permissions;
  }
}
