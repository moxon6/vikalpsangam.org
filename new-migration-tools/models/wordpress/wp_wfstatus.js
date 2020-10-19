/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfstatus extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
