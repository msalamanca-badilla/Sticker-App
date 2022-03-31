import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import axios from 'axios';
import './TickerPage.css'

export default class TickerPage extends React.Component {

  state={
    ticker: '',
    tickerData:{ },
    marketDayHigh:'',
    marketDayLow:'',
    hello:'hi'
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
    this.setState({tickerData: data})//where the result is stored from input
  };

  //WATCHLIST HANDLE SUBMIT
  handleWatchlistSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem('token')
      const fetchResponse = await fetch('/api/tickers/watchlistCreate', {
        method: 'POST',
        headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
        body: JSON.stringify({tickerData: this.state.tickerData })//send object to server
      })

      let serverResponse = await fetchResponse.json()
      console.log('Success: ', serverResponse)

      this.setState({tickerData:{}, ticker:''})

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
            <div className='stockData'>

                  <div>
                    <h2>{this.state.tickerData.displayName} ({this.state.tickerData.symbol})</h2>
                    <p>Market Day High: ${this.state.tickerData.regularMarketDayHigh}</p>
                    <p>Market Day Low: ${this.state.tickerData.regularMarketDayLow}</p>
                  </div>
            </div>
            <form onSubmit={(evt)=>this.handleWatchlistSubmit(evt)}>
              <button type="submit" className="btn btn-dark">Add to Watchlist</button>
            </form>
      </main>
    );
  }
}