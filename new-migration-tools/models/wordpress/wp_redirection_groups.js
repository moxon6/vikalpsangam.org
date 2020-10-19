/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_redirection_groups extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tracking: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 1
    },
    module_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('enabled','disabled'),
      allowNull: false,
      defaultValue: "enabled"
    },
    position: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_redirection_groups',
    timestamps: false
    });
  return wp_redirection_groups;
  }
}
