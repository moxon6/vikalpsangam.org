/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class auth_group extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "auth_group_name_key"
    }
  }, {
    sequelize,
    tableName: 'auth_group',
    schema: 'public',
    timestamps: false
    });
  return auth_group;
  }
}
