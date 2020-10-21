/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twitter_tweet', {
    retweeter_profile_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remote_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    retweeter_user_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profile_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'twitter_query',
        key: 'id'
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    retweeter_full_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'twitter_tweet',
    schema: 'public',
    timestamps: false
    });
};
