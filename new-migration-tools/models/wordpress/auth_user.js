/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_user extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    is_superuser: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    is_staff: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    date_joined: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'auth_user',
    timestamps: false
    });
  return auth_user;
  }
}
