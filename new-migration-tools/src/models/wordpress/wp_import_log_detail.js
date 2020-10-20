/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_import_log_detail', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hash_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    verify: {
      type: "BLOB",
      allowNull: false
    },
    categories: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    post_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_import_log_detail',
    timestamps: false
    });
};
