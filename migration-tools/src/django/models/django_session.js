/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_session', {
    session_key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    session_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_session',
    schema: 'public',
    timestamps: false
    });
};
