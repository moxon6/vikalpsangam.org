/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_ultimate_csv_importer_mappingtemplate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    templatename: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    mapping: {
      type: "BLOB",
      allowNull: false
    },
    createdtime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    templateused: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0
    },
    mapping_type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csvname: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    eventKey: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_ultimate_csv_importer_mappingtemplate',
    timestamps: false
    });
};
