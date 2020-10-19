/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_redirection_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    url: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    sent_to: {
      type: "MEDIUMTEXT",
      allowNull: true
    },
    agent: {
      type: "MEDIUMTEXT",
      allowNull: false
    },
    referrer: {
      type: "MEDIUMTEXT",
      allowNull: true
    },
    redirection_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    module_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_redirection_logs',
    timestamps: false
    });
};
