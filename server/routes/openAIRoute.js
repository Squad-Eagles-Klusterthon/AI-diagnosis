const express = require('express');
const router = express.Router();

const { getPromptResp } = require('../controllers/openAIController')

router.post('/', getPromptResp)


module.exports = router;