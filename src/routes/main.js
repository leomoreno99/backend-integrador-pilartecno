const express = require('express');
const { getMain } = require('../controllers/main.controller');
const router = express.Router();


/* GET home page. */
router.get('/', getMain);

module.exports = router;