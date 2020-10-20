/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_smackcsv_file_events', {
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
    mode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hash_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_rows: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    },
    lock: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    progress: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_smackcsv_file_events',
    timestamps: false
    });
};
