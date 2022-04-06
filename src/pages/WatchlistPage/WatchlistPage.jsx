import React from "react";
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

      handleRemoveFromWatchlist= async (evt) =>{
        evt.preventDefault()
        try{
            const id = evt.target.id
            const removeTicker = await fetch(`/api/tickers/watchlist/delete/${id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            })   
            let serverResponse = await removeTicker.json()
            console.log("Delete Successful:", serverResponse)
            window.location.reload()  
        }
        catch(err) {
            console.log("error")
        }
    }

    render(){
        return(
            <main className='WatchlistPage'>
                <h1 className = 'titleFont'> {this.props.user.name}'s Watchlist</h1>
                <hr/>                
                {
                    this.state.watchlistItems.length > 0 && 
                    <div>
                        {
                            this.state.watchlistItems.map((watchlistItem,i) => {
                                return(  
                                    <div key={'watchlistItem' + i}>
                                        <h4 className = 'tickerWatchlist'>{watchlistItem.displayName}({watchlistItem.tickerSymbol})</h4>                                              
                                        <table>                                          
                                        <thead>
                                                <tr>                                     
                                                    <th>Market Day
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                        </svg></th>
                                                        <th>Market Day<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                                                        </svg>
                                                    </th>
                                                    <th></th>   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>                                      
                                                    <td>${watchlistItem.regularMarketDayHigh}</td>
                                                    <td>${watchlistItem.regularMarketDayLow}</td>   
                                                    <td>
                                                        <form id={watchlistItem._id} onSubmit={(evt)=>this.handleRemoveFromWatchlist(evt)}>
                                                                <button type="submit" id='removeButton' className="btn btn-dark">- Remove</button>
                                                        </form>
                                                    </td>                                  
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr/>
                                    </div> 
                                )
                            })
                        }                        
                    </div> 
                }
            </main>
        )
    }
}

