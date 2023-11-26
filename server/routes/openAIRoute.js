const express = require('express');
const router = express.Router();

const { getPromptResp } = require('../controllers/openAIController')

router.get('/chats/:content', getPromptResp)


module.exports = router;