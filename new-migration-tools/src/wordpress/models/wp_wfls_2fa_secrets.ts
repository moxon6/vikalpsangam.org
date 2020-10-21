/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_wfls_2fa_secretsAttributes {
  id?: number;
  user_id?: number;
  secret?: any;
  recovery?: any;
  ctime?: number;
  vtime?: number;
  mode?: any;
}

export class wp_wfls_2fa_secrets extends Model<wp_wfls_2fa_secretsAttributes, wp_wfls_2fa_secretsAttributes> implements wp_wfls_2fa_secretsAttributes {
  id?: number;
  user_id?: number;
  secret?: any;
  recovery?: any;
  ctime?: number;
  vtime?: number;
  mode?: any;

  static initModel(sequelize: Sequelize) {
    wp_wfls_2fa_secrets.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER({length: 11}).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    secret: {
      type: "TINYBLOB",
      allowNull: false
    },
    recovery: {
      type: "BLOB",
      allowNull: false
    },
    ctime: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    },
    vtime: {
      type: DataTypes.INTEGER({length: 10}).UNSIGNED,
      allowNull: false
    },
    mode: {
      type: DataTypes.ENUM('authenticator'),
      allowNull: false,
      defaultValue: "authenticator"
    }
  }, {
    sequelize,
    tableName: 'wp_wfls_2fa_secrets',
    timestamps: false
    });
  return wp_wfls_2fa_secrets;
  }
}
