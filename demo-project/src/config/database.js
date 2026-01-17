const { Sequelize } = require("sequelize");
require("dotenv").config();

// Khởi tạo kết nối Sequelize với PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME || "product_db",
  process.env.DB_USER || "admin",
  process.env.DB_PASSWORD || "admin123",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

// Hàm kiểm tra kết nối database
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error.message);
    process.exit(1);
  }
};

// Hàm đồng bộ models với database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Database synchronized successfully.");
  } catch (error) {
    console.error("❌ Error synchronizing database:", error.message);
  }
};

module.exports = {
  sequelize,
  testConnection,
  syncDatabase,
};
