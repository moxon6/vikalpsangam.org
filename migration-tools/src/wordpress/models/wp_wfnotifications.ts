/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfnotificationsAttributes {
  id?: string;
  new?: number;
  category?: string;
  priority?: number;
  ctime?: number;
  html?: string;
  links?: string;
}

export class wp_wfnotifications extends Model<wp_wfnotificationsAttributes, wp_wfnotificationsAttributes> implements wp_wfnotificationsAttributes {
  id?: string;
  new?: number;
  category?: string;
  priority?: number;
  ctime?: number;
  html?: string;
  links?: string;

  static initModel(sequelize: Sequelize) {
    wp_wfnotifications.init({
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    new: {
      type: DataTypes.INTEGER({length: 3}).UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER({length: 11}),
      allowNull: false,
      defaultValue: 1000
    },
    ctime: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    links: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wfnotifications',
    timestamps: false
    });
  return wp_wfnotifications;
  }
}
