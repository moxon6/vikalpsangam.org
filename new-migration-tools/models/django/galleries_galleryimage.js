/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class galleries_galleryimage extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    _order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gallery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'galleries_gallery',
        key: 'page_ptr_id'
      }
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'galleries_galleryimage',
    schema: 'public',
    timestamps: false
    });
  return galleries_galleryimage;
  }
}
