import React from "react";
import UserLogOut from "../UserLogOut/UserLogOut";

function Nav(props){
    return(
        <footer>
        <nav >
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/watchlist">Watchlist</a>
                <a class="navbar-brand" href="/tickers">Search Stock Ticker</a>
                <UserLogOut setUserInState = {props.setUserInState}/>
            </nav>
        </nav>
        </footer>
    )
}

export default Nav;