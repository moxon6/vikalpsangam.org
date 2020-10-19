/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class generic_keyword extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    slug: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'generic_keyword',
    schema: 'public',
    timestamps: false
    });
  return generic_keyword;
  }
}
