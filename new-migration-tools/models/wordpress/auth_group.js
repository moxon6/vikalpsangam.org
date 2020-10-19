/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_group', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_group',
    timestamps: false
    });
};
