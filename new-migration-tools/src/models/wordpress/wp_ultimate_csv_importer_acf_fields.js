/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ultimate_csv_importer_acf_fields', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    groupId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fieldId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fieldLabel: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fieldName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fieldType: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    fdOption: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_ultimate_csv_importer_acf_fields',
    timestamps: false
    });
};
