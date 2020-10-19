/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_group extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
