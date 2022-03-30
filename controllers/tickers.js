const OrderModel = require('../models/ticker.js'); 
var request = require('request');
const axios = require('axios');
const TIINGO = process.env.TIINGO


var requestOptions = {
        'url': 'https://api.tiingo.com/api/test?token=9cc1c059bee7ea41a3ce614958f8c9a9ed9a8133',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TIINGO}`
            }
        };

request(requestOptions,
        function(error, response, body) {
            console.log(body);
        }
);        


module.exports = {
    getTicker,
    index,
    addToWatchlist
}



async function getTicker(req, res) {
  
  let requestOptions = {
        method: 'GET',
        url: 'https://api.tiingo.com/tiingo/daily/AAPL',
        parama:{query: req.body},
        headers: {
            Authorization: `Token ${TIINGO}`
            }
        };
        request(requestOptions,
                  function(error, response, body) {
                      console.log(body);
                  }
          ); 
}

async function index(req, res) {
  try {      
    
    res.status(200).json()         
  } catch(err) {
    res.status(400).json(err);
  }
}

async function addToWatchlist(req,res){
  try {      
    res.status(200).json()         
  } catch(err) {
    res.status(400).json(err);
  }
}