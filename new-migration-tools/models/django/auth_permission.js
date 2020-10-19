/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_permission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      },
      unique: "auth_permission_content_type_id_key"
    },
    codename: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "auth_permission_content_type_id_key"
    }
  }, {
    sequelize,
    tableName: 'auth_permission',
    schema: 'public',
    timestamps: false
    });
};
