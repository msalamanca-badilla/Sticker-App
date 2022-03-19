const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/tickers');

router.get('/tickers', orderCtrl.index)

module.exports = router;