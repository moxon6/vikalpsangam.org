/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_user_groups extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
