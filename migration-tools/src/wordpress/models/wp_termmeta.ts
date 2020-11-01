/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_termmetaAttributes {
  meta_id?: number;
  term_id?: number;
  meta_key?: string;
  meta_value?: any;
}

export class wp_termmeta extends Model<wp_termmetaAttributes, wp_termmetaAttributes> implements wp_termmetaAttributes {
  meta_id?: number;
  term_id?: number;
  meta_key?: string;
  meta_value?: any;

  static initModel(sequelize: Sequelize) {
    wp_termmeta.init({
    meta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_value: {
      type: "LONGTEXT",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_termmeta',
    timestamps: false
    });
  return wp_termmeta;
  }
}
