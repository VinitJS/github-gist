const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/database');

module.exports = db.define('favorite_gists', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  gist_id: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
