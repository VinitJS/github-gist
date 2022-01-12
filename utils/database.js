const Sequelize = require('sequelize');
const config = require('../env/config');

// DB Connection
exports.db = new Sequelize(config.DB_NAME, config.DB_NAME, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: config.DB
});