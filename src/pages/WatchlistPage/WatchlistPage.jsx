import React from "react";
import { Route } from "react-router";
import TickerPage from "../TickerPage/TickerPage";
import './WatchlistPage.css'
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
          let watchlist = await fetchWatchlistReponse.json();
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
                                    <table key={'watchlistItem' + i}>   
                                       <h4 className = 'tickerWatchlist'>{watchlistItem.displayName}({watchlistItem.tickerSymbol})</h4>
                                        <tr>
                                            <th>Market Day <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                            </svg></th>
                                            <th>Market Day <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                                            </svg></th>
                                            <td></td>   
                                        </tr>
                                        <tr>
                                            <td>{watchlistItem.regularMarketDayHigh}</td>
                                            <td>{watchlistItem.regularMarketDayLow}</td>   
                                            <td></td>    
                                        </tr>
                                        <hr/> 
                                        
                                    </table>
                                    
                                )
                            })
                        }                        
                    </div> 
                    
                }
                
            </main>
        )
    }
}