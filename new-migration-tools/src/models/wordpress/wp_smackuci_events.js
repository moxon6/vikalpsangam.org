/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_smackuci_events', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    revision: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    original_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    friendly_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    import_type: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    filetype: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filepath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eventKey: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    registered_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    parent_node: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    processing: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    executing: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    triggered: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    event_started_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    processed: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
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
    deleted: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    is_terminated: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    terminated_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    last_activity: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    siteid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 1
    },
    month: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_smackuci_events',
    timestamps: false
    });
};
