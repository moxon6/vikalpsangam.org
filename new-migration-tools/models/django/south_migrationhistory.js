/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class south_migrationhistory extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    migration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applied: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'south_migrationhistory',
    schema: 'public',
    timestamps: false
    });
  return south_migrationhistory;
  }
}
