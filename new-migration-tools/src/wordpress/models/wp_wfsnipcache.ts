/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfsnipcacheAttributes {
  id?: number;
  IP?: string;
  expiration?: Date;
  body?: string;
  count?: number;
  type?: number;
}

export class wp_wfsnipcache extends Model<wp_wfsnipcacheAttributes, wp_wfsnipcacheAttributes> implements wp_wfsnipcacheAttributes {
  id?: number;
  IP?: string;
  expiration?: Date;
  body?: string;
  count?: number;
  type?: number;

  static initModel(sequelize: Sequelize) {
    wp_wfsnipcache.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    IP: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    body: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    count: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_wfsnipcache',
    timestamps: false
    });
  return wp_wfsnipcache;
  }
}
