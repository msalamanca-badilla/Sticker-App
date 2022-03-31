const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    tickerSymbol: String
  }, {
    timestamps: true,
});

let TickerModel = mongoose.model('Ticker', tickerSchema); 
module.exports = TickerModel; 