import React from "react";
import UserLogOut from "../UserLogOut/UserLogOut";
import { Link } from "react-router-dom";

function Nav(props){
    return(
        <footer className = 'Nav'>
            <nav className="navbar text-white bg-dark rounded">
                <Link to='/watchlist'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                    <p className="text-white bg-dark">Watchlist</p>
                </Link>
                <Link to ='/tickers'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <div className="text-white bg-dark">Search</div>
                </Link>
                <UserLogOut setUserInState = {props.setUserInState}/>
            </nav>
        </footer>
    )
}

export default Nav;