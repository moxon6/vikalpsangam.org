/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface auth_groupAttributes {
  id?: number;
  name?: string;
}

export class auth_group extends Model<auth_groupAttributes, auth_groupAttributes> implements auth_groupAttributes {
  id?: number;
  name?: string;

  static initModel(sequelize: Sequelize) {
    auth_group.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_group',
    timestamps: false
    });
  return auth_group;
  }
}
