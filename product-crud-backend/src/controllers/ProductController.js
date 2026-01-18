const ProductService = require('../services/ProductService');

class ProductController {
  /**
   * GET /api/products - Get all products
   */
  async getAll(req, res, next) {
    try {
      const filters = {
        category: req.query.category,
        isActive: req.query.isActive,
        search: req.query.search
      };

      const products = await ProductService.getAllProducts(filters);

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
   * GET /api/products/:id - Get product by ID
   */
  async getById(req, res, next) {
    try {
      const product = await ProductService.getProductById(req.params.id);

      res.status(200).json({
        success: true,
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/products - Create new product
   */
  async create(req, res, next) {
    try {
      const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category,
        isActive: req.body.isActive !== undefined ? req.body.isActive : true
      };

      // Handle image upload
      if (req.file) {
        productData.imageUrl = `/assets/${req.file.filename}`;
      }

      const product = await ProductService.createProduct(productData);

      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/products/:id - Update product
   */
  async update(req, res, next) {
    try {
      const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category,
        isActive: req.body.isActive
      };

      // Handle image upload
      if (req.file) {
        productData.imageUrl = `/assets/${req.file.filename}`;
      }

      // Remove undefined fields
      Object.keys(productData).forEach(key => {
        if (productData[key] === undefined) {
          delete productData[key];
        }
      });

      const product = await ProductService.updateProduct(req.params.id, productData);

      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/products/:id - Delete product (soft delete)
   */
  async delete(req, res, next) {
    try {
      const product = await ProductService.deleteProduct(req.params.id);

      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
