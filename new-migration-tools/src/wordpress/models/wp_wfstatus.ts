/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfstatusAttributes {
  id?: number;
  ctime?: number;
  level?: number;
  type?: string;
  msg?: string;
}

export class wp_wfstatus extends Model<wp_wfstatusAttributes, wp_wfstatusAttributes> implements wp_wfstatusAttributes {
  id?: number;
  ctime?: number;
  level?: number;
  type?: string;
  msg?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfstatus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ctime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    msg: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wfstatus',
    timestamps: false
    });
  return wp_wfstatus;
  }
}
