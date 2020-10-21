/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_usermetaAttributes {
  umeta_id?: number;
  user_id?: number;
  meta_key?: string;
  meta_value?: any;
}

export class wp_usermeta extends Model<wp_usermetaAttributes, wp_usermetaAttributes> implements wp_usermetaAttributes {
  umeta_id?: number;
  user_id?: number;
  meta_key?: string;
  meta_value?: any;

  static initModel(sequelize: Sequelize) {
    wp_usermeta.init({
    umeta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
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
    tableName: 'wp_usermeta',
    timestamps: false
    });
  return wp_usermeta;
  }
}
