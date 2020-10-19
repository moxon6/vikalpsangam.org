/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class forms_formentry extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    entry_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'forms_form',
        key: 'page_ptr_id'
      }
    }
  }, {
    sequelize,
    tableName: 'forms_formentry',
    schema: 'public',
    timestamps: false
    });
  return forms_formentry;
  }
}
