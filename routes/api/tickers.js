const { Router } = require('express');
const express = require('express');
const router = express.Router();
const tickerCtrl = require('../../controllers/tickers');

router.get('/watchlist', tickerCtrl.index )
router.post('/watchlistCreate', tickerCtrl.addToWatchlist)
router.get('/watchlist/detail', tickerCtrl.watchlistDetail)
router.delete('/watchlist/delete/:id', tickerCtrl.removeFromWatchlist)

module.exports = router;