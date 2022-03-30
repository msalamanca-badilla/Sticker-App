import React from "react";

export default class IndexPage extends React.Component{
    render(){
        return(
            <main className='WatchlistPage'>
                <h1>User's Watchlist</h1>
                <div>Data as of</div>
                <a className="navbar-brand" href="/tickers/details">Details Page</a>
            </main>
        )
    }
}