/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_user_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "auth_user_user_permissions_user_id_key"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "auth_user_user_permissions_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_user_user_permissions',
    schema: 'public',
    timestamps: false
    });
};
