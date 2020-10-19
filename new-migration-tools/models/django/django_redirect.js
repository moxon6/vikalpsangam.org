/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class django_redirect extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      },
      unique: "django_redirect_site_id_key"
    },
    old_path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_redirect_site_id_key"
    },
    new_path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_redirect',
    schema: 'public',
    timestamps: false
    });
  return django_redirect;
  }
}
