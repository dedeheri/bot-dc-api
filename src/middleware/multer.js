const multer = require("multer");

// storage
const diskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./assets");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname.match(/\..*$/)[0]);
  },
});

// filter
const fileFilter = (req, file, callback) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const image = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
});

module.exports = image;
