const sequelize = require('../config/database');
const Product = require('./Product');
const Customer = require('./Customer');

const db = {
  sequelize,
  Product,
  Customer
};

module.exports = db;
