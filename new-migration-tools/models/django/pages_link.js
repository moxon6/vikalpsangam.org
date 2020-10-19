/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class pages_link extends Model {
  static init(sequelize, DataTypes) {
  super.init({
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
    tableName: 'pages_link',
    schema: 'public',
    timestamps: false
    });
  return pages_link;
  }
}
