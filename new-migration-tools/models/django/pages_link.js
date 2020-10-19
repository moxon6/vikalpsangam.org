/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages_link', {
    page_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pages_page',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pages_link',
    schema: 'public',
    timestamps: false
    });
};
