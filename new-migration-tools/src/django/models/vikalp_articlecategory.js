/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vikalp_articlecategory', {
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
};
