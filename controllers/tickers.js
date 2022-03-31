const TickerModel = require('../models/ticker.js'); 
var request = require('request');
const axios = require('axios');
const TIINGO = process.env.TIINGO




module.exports = {
    getTicker,
    index,
    addToWatchlist
}

async function getTicker(req,res){
  const options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'X-API-KEY': 'P0CPGkiczQ2tknb0qVTO52Ij1nkRs6Uu7H8DUhLc'
    }
  };
}  

async function index(req, res) {
  try {
    // 1. grab all items from DB, sorted by date descending
    let watchlist = await TickerModel.find({user: req.user._id}).sort({createdAt:'desc'}).exec();
    console.log(watchlist)
    // 2. send to frontend
    res.status(200).json(watchlist)         
  } catch(err) {
    res.status(400).json(err);
  }
}


async function addToWatchlist(req, res) {
  try {
      let createWatchlist = await TickerModel.create({
        user:req.user._id,
        tickerSymbol: req.body.tickerSymbol, 
        displayName: req.body.displayName,
        regularMarketDayHigh: req.body.regularMarketDayHigh,
        regularMarketDayLow: req.body.regularMarketDayLow

      })
      res.status(200).json(createWatchlist);
  } catch(err) {
      console.log('error')
      res.status(400).json(err)
  }
}