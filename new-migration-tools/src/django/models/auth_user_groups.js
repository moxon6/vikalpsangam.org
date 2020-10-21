/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_groups', {
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
      unique: "auth_user_groups_user_id_key"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "auth_user_groups_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_user_groups',
    schema: 'public',
    timestamps: false
    });
};
