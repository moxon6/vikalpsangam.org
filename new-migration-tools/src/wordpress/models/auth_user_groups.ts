/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface auth_user_groupsAttributes {
  id?: number;
  user_id?: number;
  group_id?: number;
}

export class auth_user_groups extends Model<auth_user_groupsAttributes, auth_user_groupsAttributes> implements auth_user_groupsAttributes {
  id?: number;
  user_id?: number;
  group_id?: number;

  static initModel(sequelize: Sequelize) {
    auth_user_groups.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_user_groups',
    timestamps: false
    });
  return auth_user_groups;
  }
}
