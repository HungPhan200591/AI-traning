const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

/**
 * @route   GET /api/products
 * @desc    Lấy danh sách tất cả sản phẩm
 * @query   category, isActive
 * @access  Public
 */
router.get('/', productController.getAllProducts);

/**
 * @route   GET /api/products/:id
 * @desc    Lấy sản phẩm theo ID
 * @access  Public
 */
router.get('/:id', productController.getProductById);

/**
 * @route   POST /api/products
 * @desc    Tạo sản phẩm mới
 * @access  Public
 */
router.post('/', productController.createProduct);

/**
 * @route   PUT /api/products/:id
 * @desc    Cập nhật sản phẩm
 * @access  Public
 */
router.put('/:id', productController.updateProduct);

/**
 * @route   DELETE /api/products/:id
 * @desc    Xóa sản phẩm
 * @access  Public
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;
