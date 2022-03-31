const TickerModel = require('../models/ticker.js'); 

module.exports = {
    
    index,
    addToWatchlist,
    removeFromWatchlist,
}

async function index(req, res) {
  try {
    // 1. grab all items from DB, sorted by date descending
    let watchlist = await TickerModel.find({user: req.user._id}).sort({createdAt:'desc'}).exec();
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

async function removeFromWatchlist(req,res){
  try{
    let deleteTicker = await TickerModel.findByIdAndDelete(req.params.id)
    console.log({deleteTicker})
    res.status(200).json(deleteTicker)        
  }
  catch(err){
    res.status(400).json(err)
  }
}

