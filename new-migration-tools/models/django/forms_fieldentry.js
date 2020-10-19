/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class forms_fieldentry extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    entry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'forms_formentry',
        key: 'id'
      }
    },
    field_id: {
      type: DataTypes.INTEGER,
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'forms_fieldentry',
    schema: 'public',
    timestamps: false
    });
  return forms_fieldentry;
  }
}
