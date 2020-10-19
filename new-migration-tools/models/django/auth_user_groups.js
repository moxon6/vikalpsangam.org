/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_user_groups extends Model {
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
      unique: "auth_user_groups_user_id_key"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "auth_user_groups_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_user_groups',
    schema: 'public',
    timestamps: false
    });
  return auth_user_groups;
  }
}
