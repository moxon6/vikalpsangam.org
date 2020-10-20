/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_import_postID', {
    post_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    line_number: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_import_postID',
    timestamps: false
    });
};
