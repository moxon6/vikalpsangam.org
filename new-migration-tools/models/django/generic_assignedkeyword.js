/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class generic_assignedkeyword extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    keyword_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'generic_keyword',
        key: 'id'
      }
    },
    object_pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    _order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'generic_assignedkeyword',
    schema: 'public',
    timestamps: false
    });
  return generic_assignedkeyword;
  }
}
