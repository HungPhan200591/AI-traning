const sequelize = require('../config/database');
const Product = require('./Product');

const db = {
  sequelize,
  Product
};

module.exports = db;
