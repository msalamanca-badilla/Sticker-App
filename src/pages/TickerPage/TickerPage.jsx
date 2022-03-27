import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default class TickerPage extends React.Component {
// state={
//     stockTicker:[]
// }

//     async componentDidMount() {
//         try {
//           let jwt = localStorage.getItem('token')
//           let fetchOrdersResponse = await fetch('/api/tickers', {headers: {'Authorization': 'Bearer ' + jwt}}) 
//           let tickers = await fetchOrdersResponse.json(); 
//           this.setState({ stockTicker: tickers})
//         } catch (err) {
//           console.error('ERROR:', err) 
//       }
//     }

  render() {
    // console.log(this.props)
    return (
      <main className="TickerPage">
          <UserLogOut setUserInState = {this.props.setUserInState}/>
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