const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

const config =  require('./env/config');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');
// DB Connection
const sequelize = new Sequelize(config.DB_NAME, config.DB_NAME, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: config.DB
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start the server
const port = config.PORT;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});