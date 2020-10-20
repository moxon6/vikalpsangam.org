/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_import_detail_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hash_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_records: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    processing_records: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: 0
    },
    remaining_records: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: 0
    },
    filesize: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    skipped: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    running: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'wp_import_detail_log',
    timestamps: false
    });
};
