/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_sitepermission_sites', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sitepermission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'core_sitepermission',
        key: 'id'
      },
      unique: "core_sitepermission_sit_sitepermission_id_31fc3b7b7e3badd5_uniq"
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      },
      unique: "core_sitepermission_sit_sitepermission_id_31fc3b7b7e3badd5_uniq"
    }
  }, {
    sequelize,
    tableName: 'core_sitepermission_sites',
    schema: 'public',
    timestamps: false
    });
};
