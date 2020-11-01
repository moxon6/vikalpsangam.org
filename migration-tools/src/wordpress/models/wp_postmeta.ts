/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_postmetaAttributes {
  meta_id?: number;
  post_id?: number;
  meta_key?: string;
  meta_value?: any;
}

export class wp_postmeta extends Model<wp_postmetaAttributes, wp_postmetaAttributes> implements wp_postmetaAttributes {
  meta_id?: number;
  post_id?: number;
  meta_key?: string;
  meta_value?: any;

  static initModel(sequelize: Sequelize) {
    wp_postmeta.init({
    meta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    post_id: {
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
    tableName: 'wp_postmeta',
    timestamps: false
    });
  return wp_postmeta;
  }
}
