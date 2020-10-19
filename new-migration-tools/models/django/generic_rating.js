/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generic_rating', {
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object_pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'generic_rating',
    schema: 'public',
    timestamps: false
    });
};
