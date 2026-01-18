const CustomerService = require('../services/CustomerService');

class CustomerController {
  /**
   * GET /api/customers - Get all customers
   */
  async getAll(req, res, next) {
    try {
      const filters = {
        isActive: req.query.isActive,
        search: req.query.search
      };

      const customers = await CustomerService.getAllCustomers(filters);

      res.status(200).json({
        success: true,
        count: customers.length,
        data: customers
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/customers/:id - Get customer by ID
   */
  async getById(req, res, next) {
    try {
      const customer = await CustomerService.getCustomerById(req.params.id);

      res.status(200).json({
        success: true,
        data: customer
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/customers - Create new customer
   */
  async create(req, res, next) {
    try {
      const customerData = {
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        isActive: req.body.isActive !== undefined ? req.body.isActive : true
      };

      // Handle avatar upload
      if (req.file) {
        customerData.avatarUrl = `/assets/${req.file.filename}`;
      }

      const customer = await CustomerService.createCustomer(customerData);

      res.status(201).json({
        success: true,
        message: 'Customer created successfully',
        data: customer
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/customers/:id - Update customer
   */
  async update(req, res, next) {
    try {
      const customerData = {
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        isActive: req.body.isActive
      };

      // Handle avatar upload
      if (req.file) {
        customerData.avatarUrl = `/assets/${req.file.filename}`;
      }

      // Remove undefined fields
      Object.keys(customerData).forEach(key => {
        if (customerData[key] === undefined) {
          delete customerData[key];
        }
      });

      const customer = await CustomerService.updateCustomer(req.params.id, customerData);

      res.status(200).json({
        success: true,
        message: 'Customer updated successfully',
        data: customer
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/customers/:id - Delete customer (soft delete)
   */
  async delete(req, res, next) {
    try {
      const customer = await CustomerService.deleteCustomer(req.params.id);

      res.status(200).json({
        success: true,
        message: 'Customer deleted successfully',
        data: customer
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CustomerController();
