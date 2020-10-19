/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class django_session extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    session_key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    session_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_session',
    schema: 'public',
    timestamps: false
    });
  return django_session;
  }
}
