/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wflivetraffichumanAttributes {
  IP?: any;
  identifier?: any;
  expiration?: number;
}

export class wp_wflivetraffichuman extends Model<wp_wflivetraffichumanAttributes, wp_wflivetraffichumanAttributes> implements wp_wflivetraffichumanAttributes {
  IP?: any;
  identifier?: any;
  expiration?: number;

  static initModel(sequelize: Sequelize) {
    wp_wflivetraffichuman.init({
    IP: {
      type: "BINARY(16)",
      allowNull: false,
      defaultValue: "                ",
      primaryKey: true
    },
    identifier: {
      type: "BINARY(32)",
      allowNull: false,
      defaultValue: "                                ",
      primaryKey: true
    },
    expiration: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wflivetraffichuman',
    timestamps: false
    });
  return wp_wflivetraffichuman;
  }
}
