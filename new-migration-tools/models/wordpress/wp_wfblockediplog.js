/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wfblockediplog', {
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    countryCode: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    blockCount: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    unixday: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    blockType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "generic",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'wp_wfblockediplog',
    timestamps: false
    });
};
