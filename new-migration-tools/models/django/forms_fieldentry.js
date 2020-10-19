/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forms_fieldentry', {
    entry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'forms_formentry',
        key: 'id'
      }
    },
    field_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'forms_fieldentry',
    schema: 'public',
    timestamps: false
    });
};
