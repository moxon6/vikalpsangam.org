/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_redirect', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      },
      unique: "django_redirect_site_id_key"
    },
    old_path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_redirect_site_id_key"
    },
    new_path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_redirect',
    schema: 'public',
    timestamps: false
    });
};
