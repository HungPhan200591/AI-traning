/**
 * Validation middleware for product creation/update
 */
const validateProduct = (req, res, next) => {
  const errors = [];

  // Validate name
  if (!req.body.name || req.body.name.trim() === '') {
    errors.push('Product name is required');
  } else if (req.body.name.length > 255) {
    errors.push('Product name must not exceed 255 characters');
  }

  // Validate price
  if (!req.body.price) {
    errors.push('Product price is required');
  } else {
    const price = parseFloat(req.body.price);
    if (isNaN(price) || price < 0) {
      errors.push('Product price must be a positive number');
    }
  }

  // Validate stock
  if (req.body.stock === undefined || req.body.stock === null || req.body.stock === '') {
    errors.push('Product stock is required');
  } else {
    const stock = parseInt(req.body.stock);
    if (isNaN(stock) || stock < 0) {
      errors.push('Product stock must be a non-negative integer');
    }
  }

  // Validate category (optional)
  if (req.body.category && req.body.category.length > 100) {
    errors.push('Category must not exceed 100 characters');
  }

  // If there are validation errors, return 400
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

/**
 * Validation middleware for customer creation/update
 */
const validateCustomer = (req, res, next) => {
  const errors = [];

  // Validate fullName
  if (!req.body.fullName || req.body.fullName.trim() === '') {
    errors.push('Full name is required');
  } else if (req.body.fullName.length > 255) {
    errors.push('Full name must not exceed 255 characters');
  }

  // Validate email
  if (!req.body.email || req.body.email.trim() === '') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      errors.push('Must be a valid email address');
    }
  }

  // Validate phone (optional)
  if (req.body.phone && req.body.phone.length > 20) {
    errors.push('Phone number must not exceed 20 characters');
  }

  // If there are validation errors, return 400
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

module.exports = {
  validateProduct,
  validateCustomer
};

