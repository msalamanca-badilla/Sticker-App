import React from "react";
import UserLogOut from "../UserLogOut/UserLogOut";

function Nav(props){
    return(
        <footer>
        <nav >
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/watchlist">Watchlist</a>
                <a className="navbar-brand" href="/tickers">Search Stock Ticker</a>
                <UserLogOut setUserInState = {props.setUserInState}/>
            </nav>
        </nav>
        </footer>
    )
}

export default Nav;