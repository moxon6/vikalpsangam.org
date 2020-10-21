/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface auth_permissionAttributes {
  id?: number;
  name?: string;
  content_type_id?: number;
  codename?: string;
}

export class auth_permission extends Model<auth_permissionAttributes, auth_permissionAttributes> implements auth_permissionAttributes {
  id?: number;
  name?: string;
  content_type_id?: number;
  codename?: string;

  static initModel(sequelize: Sequelize) {
    auth_permission.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_permission',
    timestamps: false
    });
  return auth_permission;
  }
}
