/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_redirection_404Attributes {
  id?: number;
  created?: Date;
  url?: string;
  agent?: string;
  referrer?: string;
  ip?: string;
}

export class wp_redirection_404 extends Model<wp_redirection_404Attributes, wp_redirection_404Attributes> implements wp_redirection_404Attributes {
  id?: number;
  created?: Date;
  url?: string;
  agent?: string;
  referrer?: string;
  ip?: string;

  static initModel(sequelize: Sequelize) {
    wp_redirection_404.init({
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
