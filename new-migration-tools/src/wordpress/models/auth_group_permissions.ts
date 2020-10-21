/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface auth_group_permissionsAttributes {
  id?: number;
  group_id?: number;
  permission_id?: number;
}

export class auth_group_permissions extends Model<auth_group_permissionsAttributes, auth_group_permissionsAttributes> implements auth_group_permissionsAttributes {
  id?: number;
  group_id?: number;
  permission_id?: number;

  static initModel(sequelize: Sequelize) {
    auth_group_permissions.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_group_permissions',
    timestamps: false
    });
  return auth_group_permissions;
  }
}
