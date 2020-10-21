/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_term_relationshipsAttributes {
  object_id?: number;
  term_taxonomy_id?: number;
  term_order?: number;
}

export class wp_term_relationships extends Model<wp_term_relationshipsAttributes, wp_term_relationshipsAttributes> implements wp_term_relationshipsAttributes {
  object_id?: number;
  term_taxonomy_id?: number;
  term_order?: number;

  static initModel(sequelize: Sequelize) {
    wp_term_relationships.init({
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
      type: DataTypes.INTEGER({length: 11}),
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
