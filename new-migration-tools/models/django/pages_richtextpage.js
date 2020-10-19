/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages_richtextpage', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
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
    tableName: 'pages_richtextpage',
    schema: 'public',
    timestamps: false
    });
};
