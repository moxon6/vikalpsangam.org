/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_blogpost', {
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comments_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    keywords_string: {
      type: DataTypes.STRING,
      allowNull: false
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      }
    },
    rating_average: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rating_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_comments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    featured_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gen_description: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    _meta_title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    in_sitemap: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rating_sum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'blog_blogpost',
    schema: 'public',
    timestamps: false
    });
};
