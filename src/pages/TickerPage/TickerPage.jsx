import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Nav from '../../components/Nav/Nav';
import request from 'request'

export default class TickerPage extends React.Component {
// API
async componentDidMount(){

  const url= 'https://api.tiingo.com/api/test?token=9cc1c059bee7ea41a3ce614958f8c9a9ed9a8133'

  // const response = await fetch(url,{
  //   method:'GET',
  //   credentials: 'same-origin',
  //   mode: 'no-cors',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     // Authorization: `9cc1c059bee7ea41a3ce614958f8c9a9ed9a8133`
  //   }
  // }).then((e)=>console.log(e))
  var requestOptions = {
    'url': url,
    'headers': {
        'Content-Type': 'application/json'
        }
    };
  const response = await request(requestOptions,
      function(error, response, body) {
          console.log(body);
      }
  ); 

  const data = response
  // console.log(data)
}


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