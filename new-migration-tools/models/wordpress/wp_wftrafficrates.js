/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wftrafficrates', {
    eMin: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    hitType: {
      type: DataTypes.ENUM('hit','404'),
      allowNull: false,
      defaultValue: "hit",
      primaryKey: true
    },
    hits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wftrafficrates',
    timestamps: false
    });
};
