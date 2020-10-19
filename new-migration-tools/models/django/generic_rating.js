/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class generic_rating extends Model {
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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object_pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'generic_rating',
    schema: 'public',
    timestamps: false
    });
  return generic_rating;
  }
}
