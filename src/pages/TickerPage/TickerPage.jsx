import React from 'react';
import { Link } from 'react-router-dom';

export default class TickerPage extends React.Component {

  render() {
    return (
      <main className="TickerPage">
          <Link to='/'> Logout</Link>
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