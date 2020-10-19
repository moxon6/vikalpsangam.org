/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class twitter_query extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    interested: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'twitter_query',
    schema: 'public',
    timestamps: false
    });
  return twitter_query;
  }
}
