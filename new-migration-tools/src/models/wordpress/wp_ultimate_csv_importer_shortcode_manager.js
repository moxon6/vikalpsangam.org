/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ultimate_csv_importer_shortcode_manager', {
    post_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    image_shortcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    original_image: {
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
    }
  }, {
    sequelize,
    tableName: 'wp_ultimate_csv_importer_shortcode_manager',
    timestamps: false
    });
};
