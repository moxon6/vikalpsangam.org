/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_termsAttributes {
  term_id?: number;
  name?: string;
  slug?: string;
  term_group?: number;
}

export class wp_terms extends Model<wp_termsAttributes, wp_termsAttributes> implements wp_termsAttributes {
  term_id?: number;
  name?: string;
  slug?: string;
  term_group?: number;

  static initModel(sequelize: Sequelize) {
    wp_terms.init({
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
