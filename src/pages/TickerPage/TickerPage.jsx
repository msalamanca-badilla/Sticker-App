import React from 'react'

export default class TickerPage extends React.Component {

  render() {
    return (
      <main classNameName="TickerPage">
          <h1>Enter Stock Ticker</h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                    <button type="submit" className="btn btn-primary">Search</button>
            </form>
      </main>
    );
  }
}