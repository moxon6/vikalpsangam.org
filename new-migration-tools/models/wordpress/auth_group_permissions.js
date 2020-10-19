/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_group_permissions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_group_permissions',
    timestamps: false
    });
};
