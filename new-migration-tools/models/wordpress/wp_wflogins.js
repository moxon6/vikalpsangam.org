/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wflogins', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hitID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ctime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    fail: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IP: {
      type: "BINARY(16)",
      allowNull: true
    },
    UA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wflogins',
    timestamps: false
    });
};
