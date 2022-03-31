import React from "react";
import { Route } from "react-router";

export default class IndexPage extends React.Component{
    state={
        watchlistItems: []
    }

    async componentDidMount() {
        try {
          let jwt = localStorage.getItem('token')
          let fetchWatchlistReponse = await fetch('/api/tickers', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
          let watchlist = await fetchWatchlistReponse.json();
          this.setState({watchlistItems:watchlist})

        } catch (err) {
          console.error('ERROR:', err) 
        }
      }

    render(){
        return(
            <main className='WatchlistPage'>
                <h1> {this.props.user.name}'s Watchlist</h1>
                <div>Data as of</div>
                <p>watchlistItems={this.state.watchlistItems}</p>
                {/* <a className="navbar-brand" href="/tickers/details">Details Page</a> */}
            </main>
        )
    }
}