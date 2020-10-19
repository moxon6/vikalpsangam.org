/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_usermeta', {
    umeta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_value: {
      type: "LONGTEXT",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_usermeta',
    timestamps: false
    });
};
