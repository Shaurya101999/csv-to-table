const multer = require('multer');
// const uplaods = require('../uploads')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ '-' + file.originalname)
    }
});

// Multer Filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype === 'text/csv') {
      cb(null, true);
    } else {
      cb(null, false);
    }
};

const upload = multer({ storage: fileStorage, fileFilter: multerFilter});

module.exports = upload ;