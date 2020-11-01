/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('south_migrationhistory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    migration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applied: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'south_migrationhistory',
    schema: 'public',
    timestamps: false
    });
};
