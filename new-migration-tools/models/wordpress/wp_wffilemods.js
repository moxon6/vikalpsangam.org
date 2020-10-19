/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wffilemods', {
    filenameMD5: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    knownFile: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    oldMD5: {
      type: "BINARY(16)",
      allowNull: false
    },
    newMD5: {
      type: "BINARY(16)",
      allowNull: false
    },
    SHAC: {
      type: "BINARY(32)",
      allowNull: false,
      defaultValue: "                                "
    },
    stoppedOnSignature: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    stoppedOnPosition: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    isSafeFile: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "?"
    }
  }, {
    sequelize,
    tableName: 'wp_wffilemods',
    timestamps: false
    });
};
