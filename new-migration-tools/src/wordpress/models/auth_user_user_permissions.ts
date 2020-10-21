/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface auth_user_user_permissionsAttributes {
  id?: number;
  user_id?: number;
  permission_id?: number;
}

export class auth_user_user_permissions extends Model<auth_user_user_permissionsAttributes, auth_user_user_permissionsAttributes> implements auth_user_user_permissionsAttributes {
  id?: number;
  user_id?: number;
  permission_id?: number;

  static initModel(sequelize: Sequelize) {
    auth_user_user_permissions.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_user_user_permissions',
    timestamps: false
    });
  return auth_user_user_permissions;
  }
}
