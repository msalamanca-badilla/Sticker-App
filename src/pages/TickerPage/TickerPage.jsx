import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import axios from 'axios';

export default class TickerPage extends React.Component {

  state={
    ticker: '',
    tickerData:{ },
  }
  
  handleChange = (evt) => {
    this.setState({
      ticker: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault(); 
    const ticker = this.state.ticker
      const options = {
      method: 'GET',
      url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${ticker}`,
      headers: {
        'X-API-KEY': 'FSqieJ5I5l4wT5ManO1ZB2o1OglcUzhb7IKTxpGx'
      }
    };
    const response = await axios.request(options)
    const data = response.data.quoteResponse.result[0]
    this.setState({tickerData: data})
  };

  

  render() {
    return (
      <main className="TickerPage">
          <h1>Enter Stock Ticker</h1>
            <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.ticker} 
                    onChange={(evt)=>this.handleChange(evt)} 
                    />
                </div>
                    <button type="submit" className="btn btn-dark">Search</button>
            </form>
            {this.state.tickerData.symbol}
            {this.state.tickerData.averageAnalystRating}
      </main>
    );
  }
}