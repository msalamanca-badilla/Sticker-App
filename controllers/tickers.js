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
    let watchlist = await TickerModel.find().populate('user').exec()
    res.status(200).json(watchlist)         
  } catch(err) {
    res.status(400).json(err);
  }
}

async function addToWatchlist(req, res) {
  try {
      let createWatchlist = await TickerModel.create({
        tickerSymbol: req.body.tickerSymbol, user:req.user._id,
      })
      res.status(200).json(createWatchlist);
  } catch(err) {
      console.log('error')
      res.status(400).json(err)
  }
}