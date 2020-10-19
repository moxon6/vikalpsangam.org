/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forms_form', {
    email_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page_ptr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pages_page',
        key: 'id'
      }
    },
    email_copies: {
      type: DataTypes.STRING,
      allowNull: false
    },
    button_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    send_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    email_subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_from: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'forms_form',
    schema: 'public',
    timestamps: false
    });
};
