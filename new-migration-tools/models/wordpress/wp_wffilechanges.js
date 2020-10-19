/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wffilechanges', {
    filenameHash: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      primaryKey: true
    },
    file: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    md5: {
      type: DataTypes.CHAR(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wffilechanges',
    timestamps: false
    });
};
