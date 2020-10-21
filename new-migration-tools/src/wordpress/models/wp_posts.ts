/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_postsAttributes {
  ID?: number;
  post_author?: number;
  post_date?: Date;
  post_date_gmt?: Date;
  post_content?: any;
  post_title?: string;
  post_excerpt?: string;
  post_status?: string;
  comment_status?: string;
  ping_status?: string;
  post_password?: string;
  post_name?: string;
  to_ping?: string;
  pinged?: string;
  post_modified?: Date;
  post_modified_gmt?: Date;
  post_content_filtered?: any;
  post_parent?: number;
  guid?: string;
  menu_order?: number;
  post_type?: string;
  post_mime_type?: string;
  comment_count?: number;
}

export class wp_posts extends Model<wp_postsAttributes, wp_postsAttributes> implements wp_postsAttributes {
  ID?: number;
  post_author?: number;
  post_date?: Date;
  post_date_gmt?: Date;
  post_content?: any;
  post_title?: string;
  post_excerpt?: string;
  post_status?: string;
  comment_status?: string;
  ping_status?: string;
  post_password?: string;
  post_name?: string;
  to_ping?: string;
  pinged?: string;
  post_modified?: Date;
  post_modified_gmt?: Date;
  post_content_filtered?: any;
  post_parent?: number;
  guid?: string;
  menu_order?: number;
  post_type?: string;
  post_mime_type?: string;
  comment_count?: number;

  static initModel(sequelize: Sequelize) {
    wp_posts.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    post_author: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    post_date_gmt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    post_content: {
      type: "LONGTEXT",
      allowNull: false
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "publish"
    },
    comment_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open"
    },
    ping_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open"
    },
    post_password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    post_name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    to_ping: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pinged: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    post_modified_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    post_content_filtered: {
      type: "LONGTEXT",
      allowNull: false
    },
    post_parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    menu_order: {
      type: DataTypes.INTEGER({length: 11}),
      allowNull: false,
      defaultValue: 0
    },
    post_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "post"
    },
    post_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_posts',
    timestamps: false
    });
  return wp_posts;
  }
}
