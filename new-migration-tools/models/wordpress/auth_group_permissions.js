/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_group_permissions extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
