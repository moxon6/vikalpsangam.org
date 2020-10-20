/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ultimate_csv_importer_media', {
    post_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    attach_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hash_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "pending"
    },
    module: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_ultimate_csv_importer_media',
    timestamps: false
    });
};
