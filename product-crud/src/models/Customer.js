const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'full_name',
    validate: {
      notEmpty: {
        msg: 'Full name is required'
      },
      len: {
        args: [1, 255],
        msg: 'Full name must be between 1 and 255 characters'
      }
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: {
      msg: 'Email address already exists'
    },
    validate: {
      notEmpty: {
        msg: 'Email is required'
      },
      isEmail: {
        msg: 'Must be a valid email address'
      }
    }
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      len: {
        args: [0, 20],
        msg: 'Phone number must not exceed 20 characters'
      }
    }
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  avatarUrl: {
    type: DataTypes.STRING(500),
    allowNull: true,
    field: 'avatar_url'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'is_active'
  }
}, {
  tableName: 'customers',
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['email']
    },
    {
      fields: ['is_active']
    },
    {
      fields: ['created_at']
    }
  ]
});

module.exports = Customer;
