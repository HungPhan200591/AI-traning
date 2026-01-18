const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const upload = require('../config/multer');
const { validateProduct } = require('../middlewares/validation');

/**
 * @route   GET /api/products
 * @desc    Get all products
 * @access  Public
 * @query   category, isActive, search
 */
router.get('/', ProductController.getAll);

/**
 * @route   GET /api/products/:id
 * @desc    Get product by ID
 * @access  Public
 */
router.get('/:id', ProductController.getById);

/**
 * @route   POST /api/products
 * @desc    Create new product
 * @access  Public
 * @body    name, description, price, stock, category, isActive, image (file)
 */
router.post(
  '/',
  upload.single('image'),
  validateProduct,
  ProductController.create
);

/**
 * @route   PUT /api/products/:id
 * @desc    Update product
 * @access  Public
 * @body    name, description, price, stock, category, isActive, image (file)
 */
router.put(
  '/:id',
  upload.single('image'),
  ProductController.update
);

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete product (soft delete)
 * @access  Public
 */
router.delete('/:id', ProductController.delete);

module.exports = router;
