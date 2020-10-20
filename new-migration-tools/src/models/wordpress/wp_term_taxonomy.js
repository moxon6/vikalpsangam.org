/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_term_taxonomy', {
    term_taxonomy_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      unique: "term_id_taxonomy"
    },
    taxonomy: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "term_id_taxonomy"
    },
    description: {
      type: "LONGTEXT",
      allowNull: false
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_term_taxonomy',
    timestamps: false
    });
};
