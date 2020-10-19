/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class forms_field extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    _order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'forms_form',
        key: 'page_ptr_id'
      }
    },
    default: {
      type: DataTypes.STRING,
      allowNull: false
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    help_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    choices: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    placeholder_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    field_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'forms_field',
    schema: 'public',
    timestamps: false
    });
  return forms_field;
  }
}
