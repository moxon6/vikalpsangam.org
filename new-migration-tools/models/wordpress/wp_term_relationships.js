/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_term_relationships extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    object_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    term_taxonomy_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    term_order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_term_relationships',
    timestamps: false
    });
  return wp_term_relationships;
  }
}
