/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_permission extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
