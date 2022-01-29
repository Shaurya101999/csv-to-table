const homeController = require('../controllers/home_controller');
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

router.get('/', homeController.home);
router.use('/file', require('./file') );
router.post('/submit',upload.single('file'), homeController.submit);

module.exports = router ;