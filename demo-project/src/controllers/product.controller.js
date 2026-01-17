const productService = require('../services/product.service');

class ProductController {
  /**
   * GET /api/products
   * Lấy danh sách tất cả sản phẩm
   */
  async getAllProducts(req, res, next) {
    try {
      const { category, isActive } = req.query;
      
      const filters = {};
      if (category) filters.category = category;
      if (isActive !== undefined) filters.isActive = isActive === 'true';

      const products = await productService.getAllProducts(filters);

      res.status(200).json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/products/:id
   * Lấy sản phẩm theo ID
   */
  async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);

      res.status(200).json({
        success: true,
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/products
   * Tạo sản phẩm mới
   */
  async createProduct(req, res, next) {
    try {
      const productData = req.body;
      const newProduct = await productService.createProduct(productData);

      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: newProduct
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/products/:id
   * Cập nhật sản phẩm
   */
  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedProduct = await productService.updateProduct(id, updateData);

      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: updatedProduct
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/products/:id
   * Xóa sản phẩm
   */
  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      await productService.deleteProduct(id);

      res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
