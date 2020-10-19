/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forms_formentry', {
    entry_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'forms_form',
        key: 'page_ptr_id'
      }
    }
  }, {
    sequelize,
    tableName: 'forms_formentry',
    schema: 'public',
    timestamps: false
    });
};
