/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wfls_settings', {
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    value: {
      type: "LONGBLOB",
      allowNull: true
    },
    autoload: {
      type: DataTypes.ENUM('no','yes'),
      allowNull: false,
      defaultValue: "yes"
    }
  }, {
    sequelize,
    tableName: 'wp_wfls_settings',
    timestamps: false
    });
};
