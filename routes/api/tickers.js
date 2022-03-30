const express = require('express');
const router = express.Router();
const tickerCtrl = require('../../controllers/tickers');

router.get('/tickers', tickerCtrl.getTicker)
router.get('/watchlist', tickerCtrl.index )
router.post('/watchlist',tickerCtrl.addToWatchlist)

module.exports = router;