/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_blogpost_categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_blogpost',
        key: 'id'
      },
      unique: "blog_blogpost_categories_blogpost_id_79f2a5569187bd14_uniq"
    },
    blogcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_blogcategory',
        key: 'id'
      },
      unique: "blog_blogpost_categories_blogpost_id_79f2a5569187bd14_uniq"
    }
  }, {
    sequelize,
    tableName: 'blog_blogpost_categories',
    schema: 'public',
    timestamps: false
    });
};
