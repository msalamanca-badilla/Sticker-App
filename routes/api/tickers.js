const { Router } = require('express');
const express = require('express');
const router = express.Router();
const tickerCtrl = require('../../controllers/tickers');

router.get('/watchlist', tickerCtrl.allWatchlist )
router.post('/addToWatchlist', tickerCtrl.addToWatchlist)
router.delete('/watchlist/remove/:id', tickerCtrl.removeFromWatchlist)

module.exports = router;