/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class vikalp_article extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    blogpost_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'blog_blogpost',
        key: 'id'
      }
    },
    promoted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    article_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    add_to_carousel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vikalp_article',
    schema: 'public',
    timestamps: false
    });
  return vikalp_article;
  }
}
