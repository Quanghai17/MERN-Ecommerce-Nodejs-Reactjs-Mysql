const { Sequelize } = require('sequelize');

// Kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('ecommerce_node', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Kiểm tra kết nối
const connectDB = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Database connection has been established successfully.');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
      process.exit(1); // Thoát chương trình nếu kết nối thất bại
    }
  };

module.exports = { sequelize, connectDB };