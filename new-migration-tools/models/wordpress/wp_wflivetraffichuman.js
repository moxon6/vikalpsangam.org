/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wflivetraffichuman', {
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    identifier: {
      type: "BINARY(32)",
      allowNull: false,
      defaultValue: "                                ",
      primaryKey: true
    },
    expiration: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wflivetraffichuman',
    timestamps: false
    });
};
