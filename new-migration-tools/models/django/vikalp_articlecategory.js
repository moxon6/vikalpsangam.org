/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class vikalp_articlecategory extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    blogcategory_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'blog_blogcategory',
        key: 'id'
      }
    },
    category_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_long_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vikalp_articlecategory',
    schema: 'public',
    timestamps: false
    });
  return vikalp_articlecategory;
  }
}
