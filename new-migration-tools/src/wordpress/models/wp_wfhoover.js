/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wfhoover', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    host: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hostKey: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfhoover',
    timestamps: false
    });
};
