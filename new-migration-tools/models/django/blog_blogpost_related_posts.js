/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_blogpost_related_posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_blogpost',
        key: 'id'
      },
      unique: "blog_blogpost_related_po_from_blogpost_id_3007eb9b6b16df8b_uniq"
    },
    to_blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_blogpost',
        key: 'id'
      },
      unique: "blog_blogpost_related_po_from_blogpost_id_3007eb9b6b16df8b_uniq"
    }
  }, {
    sequelize,
    tableName: 'blog_blogpost_related_posts',
    schema: 'public',
    timestamps: false
    });
};
