import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import axios from 'axios';

export default class TickerPage extends React.Component {

  state={
    ticker: ''
  }

  // async componentDidMount(){
  //   const options = {
  //     method: 'GET',
  //     url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL`,
  //     params: {modules: 'defaultKeyStatistics,assetProfile'},
  //     headers: {
  //       'X-API-KEY': 'P0CPGkiczQ2tknb0qVTO52Ij1nkRs6Uu7H8DUhLc'
  //     }
  //   };
  //   const response = await axios.request(options)
  //   const data = await response.data.quoteResponse.result[0]
  //   this.setState({ticker: data})
  // }

  
  handleChange = (evt) => {
    this.setState({
      ticker: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault(); 
    const ticker = this.state.ticker
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
                    onChange={this.handleChange} 
                    />
                </div>
                    <button type="submit" className="btn btn-primary">Search</button>
            </form>
            {this.state.ticker.symbol}
      </main>
    );
  }
}