const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { testConnection, syncDatabase } = require('./src/config/database');
const productRoutes = require('./src/routes/product.routes');
const errorHandler = require('./src/middlewares/error.middleware');

// Khởi tạo Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ============ MIDDLEWARES ============
// CORS - Cho phép Frontend gọi API
app.use(cors({
  origin: '*', // Trong production nên chỉ định domain cụ thể
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

// Logging middleware (development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// ============ ROUTES ============
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/products', productRoutes);

// 404 Handler - Route không tồn tại
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} does not exist`
  });
});

// ============ ERROR HANDLER ============
app.use(errorHandler);

// ============ START SERVER ============
const startServer = async () => {
  try {
    // Kiểm tra kết nối database
    await testConnection();
    
    // Đồng bộ models với database
    await syncDatabase();
    
    // Khởi động server
    app.listen(PORT, () => {
      console.log('='.repeat(50));
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
      console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
      console.log('='.repeat(50));
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Xử lý graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Shutting down gracefully...');
  process.exit(0);
});

// Khởi động server
startServer();

module.exports = app;
