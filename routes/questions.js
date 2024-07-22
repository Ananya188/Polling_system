// we reach here from index.js in routes/api/v1/
const express = require('express');
const router = express.Router();
const questionsAPI = require('../controllers/questionsController');
const optionsAPI = require('../controllers/optionsController');

// controllers for Questions
router.get('/questions/', questionsAPI.index);
router.post('/create', questionsAPI.create);
router.post('/options/create', optionsAPI.create);
router.post('/delete', questionsAPI.delete);

module.exports = router;