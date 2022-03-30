const OrderModel = require('../models/ticker.js'); 
var request = require('request');
const axios = require('axios');
const TIINGO = process.env.TIINGO


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://yahoofinance-stocks1.p.rapidapi.com/exchanges',
//   headers: {
//     'X-RapidAPI-Host': 'yahoofinance-stocks1.p.rapidapi.com',
//     'X-RapidAPI-Key': '202dd0b747msh1ecea7c8c4b9429p14cf0djsn410940c71ee1'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });    


module.exports = {
    getTicker,
    index,
    addToWatchlist
}



async function getTicker(req, res) {
  
  let requestOptions = {
        method: 'GET',
        url: 'https://api.tiingo.com/tiingo/daily/AAPL',
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