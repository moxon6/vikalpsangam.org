/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_sitepermission', {
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
      unique: "core_sitepermission_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'core_sitepermission',
    schema: 'public',
    timestamps: false
    });
};
