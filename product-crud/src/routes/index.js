const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes');
const customerRoutes = require('./customerRoutes');

// Mount product routes
router.use('/products', productRoutes);

// Mount customer routes
router.use('/customers', customerRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;

