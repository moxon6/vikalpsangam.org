/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class wp_wfsnipcache extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
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
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
