/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_redirection_404 extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    agent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    referrer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_redirection_404',
    timestamps: false
    });
  return wp_redirection_404;
  }
}
