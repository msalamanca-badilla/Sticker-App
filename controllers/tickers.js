const OrderModel = require('../models/ticker.js'); 
var request = require('request');
const axios = require('axios');

// var requestOptions = {
//         'url': 'https://api.tiingo.com/tiingo/daily/AAPL',
//         'headers': {
//             'Content-Type': 'application/json',
//             'Authorization': 'Token 9cc1c059bee7ea41a3ce614958f8c9a9ed9a8133'
//             }
//         };

// request(requestOptions,
//         function(error, response, body) {
//             console.log(body);
//         }
// );        


module.exports = {
    post,
    index,
}


async function post(req, res) {
  try {      
    
    res.status(200).json()         
  } catch(err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {      
    
    res.status(200).json()         
  } catch(err) {
    res.status(400).json(err);
  }
}

