const express = require('express');
const router = express.Router();
const indexAPI = require('../controllers/homeController');

router.get('/',indexAPI.allques);

router.use('/questions',require('./questions'));
router.use('/options',require('./options'));

module.exports = router;