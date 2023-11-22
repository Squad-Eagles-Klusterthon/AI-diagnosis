const express = require('express');
const router = express.Router();

const { prompt } = require('../controllers/openAIController')

router.get('/', prompt)


module.exports = router;