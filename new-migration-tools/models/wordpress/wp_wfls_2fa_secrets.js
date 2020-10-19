/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wfls_2fa_secrets', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    secret: {
      type: "TINYBLOB",
      allowNull: false
    },
    recovery: {
      type: "BLOB",
      allowNull: false
    },
    ctime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    vtime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    mode: {
      type: DataTypes.ENUM('authenticator'),
      allowNull: false,
      defaultValue: "authenticator"
    }
  }, {
    sequelize,
    tableName: 'wp_wfls_2fa_secrets',
    timestamps: false
    });
};
