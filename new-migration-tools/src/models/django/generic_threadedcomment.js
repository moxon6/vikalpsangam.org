/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generic_threadedcomment', {
    by_author: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    comment_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'django_comments',
        key: 'id'
      }
    },
    replied_to_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'generic_threadedcomment',
        key: 'comment_ptr_id'
      }
    },
    rating_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating_average: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rating_sum: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'generic_threadedcomment',
    schema: 'public',
    timestamps: false
    });
};
