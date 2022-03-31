import React from 'react';
import axios from 'axios';
import './TickerPage.css'

export default class TickerPage extends React.Component {

  state={
    ticker: '',
    displayName:'',
    tickerSymbol:'',
    regularMarketDayHigh:0,
    regularMarketDayLow:0
  }
  
  //API HANDLE CHANGE
  handleChange = (evt) => {
    this.setState({
      ticker: evt.target.value,
      err:''
    });
  };

  //API HANDLESUBMIT
  handleSubmit = async (evt) => {
    evt.preventDefault(); 
      const ticker = this.state.ticker//input for 'Enter Stock Ticker'
      const options = {
      method: 'GET',
      url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${ticker}`,
      headers: {
        'X-API-KEY': '02KaHo3SM77gxqvnJQC7w8cSAj2iTUQO6CXKntuT'
      }
    };
    const response = await axios.request(options)
    const data = response.data.quoteResponse.result[0]
    this.setState({
      displayName: data.displayName,
      tickerSymbol: data.symbol,
      regularMarketDayHigh: data.regularMarketDayHigh,
      regularMarketDayLow: data.regularMarketDayLow

    })
  };

  //ADD TO WATCHLIST HANDLE SUBMIT
  handleWatchlistSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem('token')
      const fetchResponse = await fetch('/api/tickers/watchlistCreate', {
        method: 'POST',
        headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
        body: JSON.stringify({
          tickerSymbol: this.state.tickerSymbol,
          displayName: this.state.displayName,
          regularMarketDayHigh: this.state.regularMarketDayHigh,
          regularMarketDayLow: this.state.regularMarketDayLow
        })
      })

      let serverResponse = await fetchResponse.json()
      console.log('Success: ', serverResponse)

      this.setState({
        ticker: '',
        displayName:'',
        tickerSymbol:'',
        regularMarketDayHigh:0,
        regularMarketDayLow:0
        })
    } catch (err) {
      console.log("error")
      this.setState({ error:  'Try Again' });
    }
  }

  render() {
    return (
      <main className="TickerPage">
          <h1>Enter Stock Ticker</h1>
            <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input 
                      placeholder='i.e. AAPL'
                      type="text" 
                      className="form-control" 
                      value={this.state.ticker} 
                      onChange={(evt)=>this.handleChange(evt)} 
                    />
                </div>
                    <button type="submit" className="btn btn-dark">Search</button>
            </form>
            <br/>
            <hr/>
      {this.state.tickerSymbol? (
            <>
              <div className='stockData'>
                <div>
                  <h2>{this.state.displayName} ({this.state.tickerSymbol})</h2>
                  <p>Market Day High: ${this.state.regularMarketDayHigh}</p>
                  <p>Market Day Low: ${this.state.regularMarketDayLow}</p>
                </div>
              </div>
              <form onSubmit={(evt) => this.handleWatchlistSubmit(evt)}>
                <button type="submit" className="btn btn-dark">Add to Watchlist</button>
              </form>
            </>
      ):(
        <div></div>
      )}

      </main>
    );
  }
}