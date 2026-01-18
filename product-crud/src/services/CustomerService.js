const { Customer } = require('../models');
const { Op } = require('sequelize');

class CustomerService {
  /**
   * Get all customers with optional filtering
   * @param {Object} filters - Optional filters (isActive, search)
   * @returns {Promise<Array>} List of customers
   */
  async getAllCustomers(filters = {}) {
    const where = {};

    // Filter by active status
    if (filters.isActive !== undefined) {
      where.isActive = filters.isActive;
    }

    // Search by name or email
    if (filters.search) {
      where[Op.or] = [
        {
          fullName: {
            [Op.iLike]: `%${filters.search}%`
          }
        },
        {
          email: {
            [Op.iLike]: `%${filters.search}%`
          }
        }
      ];
    }

    const customers = await Customer.findAll({
      where,
      order: [['createdAt', 'DESC']]
    });

    return customers;
  }

  /**
   * Get customer by ID
   * @param {String} id - Customer UUID
   * @returns {Promise<Object>} Customer object
   */
  async getCustomerById(id) {
    const customer = await Customer.findByPk(id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    return customer;
  }

  /**
   * Create new customer
   * @param {Object} customerData - Customer data
   * @returns {Promise<Object>} Created customer
   */
  async createCustomer(customerData) {
    // Validate required fields
    if (!customerData.fullName || !customerData.email) {
      throw new Error('Full name and email are required fields');
    }

    // Check if email already exists
    const existingCustomer = await Customer.findOne({
      where: { email: customerData.email }
    });

    if (existingCustomer) {
      throw new Error('Email address already exists');
    }

    const customer = await Customer.create(customerData);
    return customer;
  }

  /**
   * Update existing customer
   * @param {String} id - Customer UUID
   * @param {Object} customerData - Updated customer data
   * @returns {Promise<Object>} Updated customer
   */
  async updateCustomer(id, customerData) {
    const customer = await this.getCustomerById(id);

    // If email is being updated, check for uniqueness
    if (customerData.email && customerData.email !== customer.email) {
      const existingCustomer = await Customer.findOne({
        where: { 
          email: customerData.email,
          id: { [Op.ne]: id }
        }
      });

      if (existingCustomer) {
        throw new Error('Email address already exists');
      }
    }

    // Update fields
    await customer.update(customerData);
    await customer.reload();

    return customer;
  }

  /**
   * Delete customer (soft delete by setting isActive to false)
   * @param {String} id - Customer UUID
   * @returns {Promise<Object>} Deleted customer
   */
  async deleteCustomer(id) {
    const customer = await this.getCustomerById(id);

    // Soft delete
    await customer.update({ isActive: false });
    await customer.reload();

    return customer;
  }

  /**
   * Hard delete customer (permanently remove from database)
   * @param {String} id - Customer UUID
   * @returns {Promise<Boolean>} Success status
   */
  async hardDeleteCustomer(id) {
    const customer = await this.getCustomerById(id);
    await customer.destroy();
    return true;
  }
}

module.exports = new CustomerService();
