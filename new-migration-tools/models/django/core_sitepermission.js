/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class core_sitepermission extends Model {
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
      unique: "core_sitepermission_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'core_sitepermission',
    schema: 'public',
    timestamps: false
    });
  return core_sitepermission;
  }
}
