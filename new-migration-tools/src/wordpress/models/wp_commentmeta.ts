/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_commentmetaAttributes {
  meta_id?: number;
  comment_id?: number;
  meta_key?: string;
  meta_value?: any;
}

export class wp_commentmeta extends Model<wp_commentmetaAttributes, wp_commentmetaAttributes> implements wp_commentmetaAttributes {
  meta_id?: number;
  comment_id?: number;
  meta_key?: string;
  meta_value?: any;

  static initModel(sequelize: Sequelize) {
    wp_commentmeta.init({
    meta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    comment_id: {
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
    tableName: 'wp_commentmeta',
    timestamps: false
    });
  return wp_commentmeta;
  }
}
