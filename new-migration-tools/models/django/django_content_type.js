/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class django_content_type extends Model {
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
      allowNull: false
    },
    app_label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_content_type_app_label_key"
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_content_type_app_label_key"
    }
  }, {
    sequelize,
    tableName: 'django_content_type',
    schema: 'public',
    timestamps: false
    });
  return django_content_type;
  }
}
