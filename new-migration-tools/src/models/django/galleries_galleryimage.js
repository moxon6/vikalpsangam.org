/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('galleries_galleryimage', {
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
};
