/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class django_site extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_site',
    schema: 'public',
    timestamps: false
    });
  return django_site;
  }
}
