/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generic_assignedkeyword', {
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    keyword_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'generic_keyword',
        key: 'id'
      }
    },
    object_pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    _order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'generic_assignedkeyword',
    schema: 'public',
    timestamps: false
    });
};
