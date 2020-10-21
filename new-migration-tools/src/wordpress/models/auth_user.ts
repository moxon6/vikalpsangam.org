/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface auth_userAttributes {
  id?: number;
  password?: string;
  last_login?: Date;
  is_superuser?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: number;
  is_active?: number;
  date_joined?: Date;
}

export class auth_user extends Model<auth_userAttributes, auth_userAttributes> implements auth_userAttributes {
  id?: number;
  password?: string;
  last_login?: Date;
  is_superuser?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: number;
  is_active?: number;
  date_joined?: Date;

  static initModel(sequelize: Sequelize) {
    auth_user.init({
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
