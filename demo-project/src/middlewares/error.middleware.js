/**
 * Middleware xử lý lỗi tập trung
 * Bắt tất cả lỗi từ routes và trả về response thống nhất
 */
const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err);

  // Lỗi từ Sequelize Validation
  if (err.name === 'SequelizeValidationError') {
    const errors = err.errors.map(e => ({
      field: e.path,
      message: e.message
    }));

    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      details: errors
    });
  }

  // Lỗi từ Sequelize Database
  if (err.name === 'SequelizeDatabaseError') {
    return res.status(500).json({
      success: false,
      error: 'Database Error',
      message: err.message
    });
  }

  // Lỗi từ Sequelize Foreign Key
  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return res.status(400).json({
      success: false,
      error: 'Foreign Key Constraint Error',
      message: 'Referenced record does not exist'
    });
  }

  // Lỗi Not Found (từ service)
  if (err.message && err.message.includes('not found')) {
    return res.status(404).json({
      success: false,
      error: 'Not Found',
      message: err.message
    });
  }

  // Lỗi Bad Request (từ service)
  if (err.message && (err.message.includes('required') || err.message.includes('invalid'))) {
    return res.status(400).json({
      success: false,
      error: 'Bad Request',
      message: err.message
    });
  }

  // Lỗi mặc định (Internal Server Error)
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
};

module.exports = errorHandler;
