/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wfcrawlers', {
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    patternSig: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.CHAR(8),
      allowNull: false
    },
    lastUpdate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    PTR: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_wfcrawlers',
    timestamps: false
    });
};
