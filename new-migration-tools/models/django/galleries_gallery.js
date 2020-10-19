/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class galleries_gallery extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    page_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pages_page',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zip_import: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'galleries_gallery',
    schema: 'public',
    timestamps: false
    });
  return galleries_gallery;
  }
}
