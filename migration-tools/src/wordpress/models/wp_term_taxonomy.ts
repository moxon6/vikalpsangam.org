/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_term_taxonomyAttributes {
  term_taxonomy_id?: number;
  term_id?: number;
  taxonomy?: string;
  description?: any;
  parent?: number;
  count?: number;
}

export class wp_term_taxonomy extends Model<wp_term_taxonomyAttributes, wp_term_taxonomyAttributes> implements wp_term_taxonomyAttributes {
  term_taxonomy_id?: number;
  term_id?: number;
  taxonomy?: string;
  description?: any;
  parent?: number;
  count?: number;

  static initModel(sequelize: Sequelize) {
    wp_term_taxonomy.init({
    term_taxonomy_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      unique: "term_id_taxonomy"
    },
    taxonomy: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "term_id_taxonomy"
    },
    description: {
      type: "LONGTEXT",
      allowNull: false
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_term_taxonomy',
    timestamps: false
    });
  return wp_term_taxonomy;
  }
}
