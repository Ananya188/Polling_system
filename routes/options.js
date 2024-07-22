// we reach here from index.js in routes/api/v1/
const express = require('express');
const router = express.Router();
const questionsAPI = require('../controllers/questionsController');
const optionsAPI = require('../controllers/optionsController');

// controllers for options
router.get('/questions',questionsAPI.index);
router.post('/addvote',optionsAPI.addvote);
router.post('/delete',optionsAPI.delete);



module.exports= router;