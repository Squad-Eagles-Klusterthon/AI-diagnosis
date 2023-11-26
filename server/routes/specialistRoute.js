const express = require('express');
const router = express.Router();

const { fetchAllDoctors } = require('../controllers/doctorsController')

router.get('/', fetchAllDoctors)


module.exports = router;