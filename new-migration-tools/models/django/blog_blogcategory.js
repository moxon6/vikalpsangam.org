/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class blog_blogcategory extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    slug: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'blog_blogcategory',
    schema: 'public',
    timestamps: false
    });
  return blog_blogcategory;
  }
}
