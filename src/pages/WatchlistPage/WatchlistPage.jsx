import React from "react";
import { Route } from "react-router";
import TickerPage from "../TickerPage/TickerPage";

export default class WatchlistPage extends React.Component{
    state={
        watchlistItems: []
    }

    async componentDidMount() {
        try {
          let jwt = localStorage.getItem('token')
          let fetchWatchlistReponse = await fetch('/api/tickers/watchlist', { 
              headers: { 'Authorization': 'Bearer ' + jwt }
            }) 
        //   console.log({fetchWatchlistReponse})
          let watchlist = await fetchWatchlistReponse.json();
        //   console.log({watchlist})
          this.setState({watchlistItems: watchlist})

        } catch (err) {
          console.error('ERROR:', err) 
        }
      }

    render(){
        console.log(this.state.watchlistItems)
        return(
            <main className='WatchlistPage'>
                <h1> {this.props.user.name}'s Watchlist</h1>
                <div>Data as of</div>
                {
                    this.state.watchlistItems.length > 0 && 
                    <div>
                        {
                            this.state.watchlistItems.map((watchlistItem,i) => {
                                return( 
                                    <p key={'watchlistItem' + i}>
                                        {watchlistItem.tickerSymbol}
                                        {watchlistItem.displayName}
                                        {watchlistItem.regularMarketDayHigh}
                                        {watchlistItem.regularMarketDayLow}
                                    </p>
                                )
                            })
                        }
                    </div> 
                }
            </main>
        )
    }
}