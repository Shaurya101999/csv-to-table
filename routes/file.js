const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file_controller');

router.get('/open',fileController.open);

module.exports = router ;