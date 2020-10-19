/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class pages_richtextpage extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pages_page',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pages_richtextpage',
    schema: 'public',
    timestamps: false
    });
  return pages_richtextpage;
  }
}
