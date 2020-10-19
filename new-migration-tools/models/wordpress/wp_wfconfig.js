/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wfconfig', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    val: {
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
    tableName: 'wp_wfconfig',
    timestamps: false
    });
};
