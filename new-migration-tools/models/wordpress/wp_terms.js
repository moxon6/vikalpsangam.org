/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_terms extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    term_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    term_group: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_terms',
    timestamps: false
    });
  return wp_terms;
  }
}
