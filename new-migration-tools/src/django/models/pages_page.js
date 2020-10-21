/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages_page', {
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    _order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pages_page',
        key: 'id'
      }
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
    login_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    titles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content_model: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: true
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
    gen_description: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    in_menus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    _meta_title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    in_sitemap: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'pages_page',
    schema: 'public',
    timestamps: false
    });
};
