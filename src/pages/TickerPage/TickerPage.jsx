import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';

export default class TickerPage extends React.Component {

  // async componentDidMount(){
  //   const options = {
  //     method: 'GET',
  //     url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
  //     params: {modules: 'defaultKeyStatistics,assetProfile'},
  //     headers: {
  //       'X-API-KEY': 'P0CPGkiczQ2tknb0qVTO52Ij1nkRs6Uu7H8DUhLc'
  //     }
  //   };
    
  //   const response = await axios.request(options)
  //   const data = await response.data.quoteSummary.result
  //   console.log(data)
  // }
  


  render() {
    return (
      <main className="TickerPage">
          <h1>Enter Stock Ticker</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                    <button type="submit" className="btn btn-primary">Search</button>
            </form>
      </main>
    );
  }
}