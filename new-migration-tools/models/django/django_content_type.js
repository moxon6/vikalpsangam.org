/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_content_type', {
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
    app_label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_content_type_app_label_key"
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_content_type_app_label_key"
    }
  }, {
    sequelize,
    tableName: 'django_content_type',
    schema: 'public',
    timestamps: false
    });
};
