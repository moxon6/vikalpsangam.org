/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface wp_commentsAttributes {
  comment_ID?: number;
  comment_post_ID?: number;
  comment_author?: any;
  comment_author_email?: string;
  comment_author_url?: string;
  comment_author_IP?: string;
  comment_date?: Date;
  comment_date_gmt?: Date;
  comment_content?: string;
  comment_karma?: number;
  comment_approved?: string;
  comment_agent?: string;
  comment_type?: string;
  comment_parent?: number;
  user_id?: number;
}

export class wp_comments extends Model<wp_commentsAttributes, wp_commentsAttributes> implements wp_commentsAttributes {
  comment_ID?: number;
  comment_post_ID?: number;
  comment_author?: any;
  comment_author_email?: string;
  comment_author_url?: string;
  comment_author_IP?: string;
  comment_date?: Date;
  comment_date_gmt?: Date;
  comment_content?: string;
  comment_karma?: number;
  comment_approved?: string;
  comment_agent?: string;
  comment_type?: string;
  comment_parent?: number;
  user_id?: number;

  static initModel(sequelize: Sequelize) {
    wp_comments.init({
    comment_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    comment_post_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    comment_author: {
      type: "TINYTEXT",
      allowNull: false
    },
    comment_author_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    comment_author_url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    comment_author_IP: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    comment_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment_karma: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    comment_approved: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "1"
    },
    comment_agent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    comment_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "comment"
    },
    comment_parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_comments',
    timestamps: false
    });
  return wp_comments;
  }
}
