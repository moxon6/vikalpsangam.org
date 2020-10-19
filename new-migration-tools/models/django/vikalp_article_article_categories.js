/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vikalp_article_article_categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vikalp_article',
        key: 'blogpost_ptr_id'
      },
      unique: "vikalp_article_article_categori_article_id_8f90b087ef79ffd_uniq"
    },
    articlecategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vikalp_articlecategory',
        key: 'blogcategory_ptr_id'
      },
      unique: "vikalp_article_article_categori_article_id_8f90b087ef79ffd_uniq"
    }
  }, {
    sequelize,
    tableName: 'vikalp_article_article_categories',
    schema: 'public',
    timestamps: false
    });
};
