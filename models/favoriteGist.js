const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/database');

module.exports = db.define('favoriteGists', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  gistId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
