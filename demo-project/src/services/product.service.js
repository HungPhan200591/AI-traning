const Product = require('../models/product.model');

class ProductService {
  /**
   * Lấy tất cả sản phẩm
   * @param {Object} filters - Bộ lọc (category, isActive)
   * @returns {Promise<Array>}
   */
  async getAllProducts(filters = {}) {
    const where = {};
    
    if (filters.category) {
      where.category = filters.category;
    }
    
    if (filters.isActive !== undefined) {
      where.isActive = filters.isActive;
    }

    const products = await Product.findAll({
      where,
      order: [['created_at', 'DESC']]
    });

    return products;
  }

  /**
   * Lấy sản phẩm theo ID
   * @param {number} id
   * @returns {Promise<Object|null>}
   */
  async getProductById(id) {
    const product = await Product.findByPk(id);
    
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }

    return product;
  }

  /**
   * Tạo sản phẩm mới
   * @param {Object} productData
   * @returns {Promise<Object>}
   */
  async createProduct(productData) {
    const { name, description, price, stock, category, isActive } = productData;

    // Validation bổ sung
    if (!name || !price) {
      throw new Error('Name and price are required fields');
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      stock: stock || 0,
      category,
      isActive: isActive !== undefined ? isActive : true
    });

    return newProduct;
  }

  /**
   * Cập nhật sản phẩm
   * @param {number} id
   * @param {Object} updateData
   * @returns {Promise<Object>}
   */
  async updateProduct(id, updateData) {
    const product = await this.getProductById(id);

    const { name, description, price, stock, category, isActive } = updateData;

    // Chỉ cập nhật các field được cung cấp
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (stock !== undefined) product.stock = stock;
    if (category !== undefined) product.category = category;
    if (isActive !== undefined) product.isActive = isActive;

    await product.save();

    return product;
  }

  /**
   * Xóa sản phẩm
   * @param {number} id
   * @returns {Promise<void>}
   */
  async deleteProduct(id) {
    const product = await this.getProductById(id);
    await product.destroy();
  }
}

module.exports = new ProductService();
