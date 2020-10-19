/* jshint indent: 2 */

import { Model, Sequelize } from 'sequelize';

export default class django_comment_flags extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "django_comment_flags_user_id_key"
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_comments',
        key: 'id'
      },
      unique: "django_comment_flags_user_id_key"
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "django_comment_flags_user_id_key"
    },
    flag_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_comment_flags',
    schema: 'public',
    timestamps: false
    });
  return django_comment_flags;
  }
}
