const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});
module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT,
    DB : process.env.DB,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
}