/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_comment_flags', {
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
};
