const { Product } = require('../models');
const { Op } = require('sequelize');

class ProductService {
  /**
   * Get all products with optional filtering
   * @param {Object} filters - Optional filters (category, isActive, search)
   * @returns {Promise<Array>} List of products
   */
  async getAllProducts(filters = {}) {
    const where = {};

    // Filter by category
    if (filters.category) {
      where.category = filters.category;
    }

    // Filter by active status
    if (filters.isActive !== undefined) {
      where.isActive = filters.isActive;
    }

    // Search by name
    if (filters.search) {
      where.name = {
        [Op.iLike]: `%${filters.search}%`
      };
    }

    const products = await Product.findAll({
      where,
      order: [['createdAt', 'DESC']]
    });

    return products;
  }

  /**
   * Get product by ID
   * @param {String} id - Product UUID
   * @returns {Promise<Object>} Product object
   */
  async getProductById(id) {
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  /**
   * Create new product
   * @param {Object} productData - Product data
   * @returns {Promise<Object>} Created product
   */
  async createProduct(productData) {
    // Validate required fields
    if (!productData.name || !productData.price || productData.stock === undefined) {
      throw new Error('Name, price, and stock are required fields');
    }

    const product = await Product.create(productData);
    return product;
  }

  /**
   * Update existing product
   * @param {String} id - Product UUID
   * @param {Object} productData - Updated product data
   * @returns {Promise<Object>} Updated product
   */
  async updateProduct(id, productData) {
    const product = await this.getProductById(id);

    // Update fields
    await product.update(productData);
    await product.reload();

    return product;
  }

  /**
   * Delete product (soft delete by setting isActive to false)
   * @param {String} id - Product UUID
   * @returns {Promise<Object>} Deleted product
   */
  async deleteProduct(id) {
    const product = await this.getProductById(id);

    // Soft delete
    await product.update({ isActive: false });
    await product.reload();

    return product;
  }

  /**
   * Hard delete product (permanently remove from database)
   * @param {String} id - Product UUID
   * @returns {Promise<Boolean>} Success status
   */
  async hardDeleteProduct(id) {
    const product = await this.getProductById(id);
    await product.destroy();
    return true;
  }
}

module.exports = new ProductService();
