/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class core_sitepermission_sites extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
  return core_sitepermission_sites;
  }
}
