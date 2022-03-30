import React from "react";
import UserLogOut from "../UserLogOut/UserLogOut";

function Nav(props){
    return(
        <footer>
        <nav >
            <nav className="navbar text-white bg-dark">
                <a className="text-white bg-dark" href="/watchlist">Watchlist</a>
                <a className="text-white bg-dark" href="/tickers">Search Stock Ticker</a>
                <UserLogOut setUserInState = {props.setUserInState}/>
            </nav>
        </nav>
        </footer>
    )
}

export default Nav;