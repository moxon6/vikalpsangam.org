/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_blogcategory', {
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
};
