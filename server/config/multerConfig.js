const multer = require('multer');
const path = require('path');

// Cấu hình lưu trữ với multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/') // Thư mục lưu trữ file
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) // Tên file
  }
});

const upload = multer({ storage: storage });

module.exports = upload;