const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');
const upload = require('../config/multer');
const { validateCustomer } = require('../middlewares/validation');

/**
 * @route   GET /api/customers
 * @desc    Get all customers
 * @access  Public
 * @query   isActive, search
 */
router.get('/', CustomerController.getAll);

/**
 * @route   GET /api/customers/:id
 * @desc    Get customer by ID
 * @access  Public
 */
router.get('/:id', CustomerController.getById);

/**
 * @route   POST /api/customers
 * @desc    Create new customer
 * @access  Public
 * @body    fullName, email, phone, address, isActive, avatar (file)
 */
router.post(
  '/',
  upload.single('avatar'),
  validateCustomer,
  CustomerController.create
);

/**
 * @route   PUT /api/customers/:id
 * @desc    Update customer
 * @access  Public
 * @body    fullName, email, phone, address, isActive, avatar (file)
 */
router.put(
  '/:id',
  upload.single('avatar'),
  CustomerController.update
);

/**
 * @route   DELETE /api/customers/:id
 * @desc    Delete customer (soft delete)
 * @access  Public
 */
router.delete('/:id', CustomerController.delete);

module.exports = router;
