import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Nav from '../../components/Nav/Nav';

export default class TickerPage extends React.Component {

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