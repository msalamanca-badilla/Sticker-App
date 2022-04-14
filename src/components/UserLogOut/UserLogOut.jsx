import React, {useState} from "react";
import { Link } from "react-router-dom";


function UserLogOut (props){
    const[userLogoutData, setUserLogout]= useState
        ({
            loggedOut: false
        })

    function logout(){
        window.localStorage.clear('token');
        props.setUserInState(null)
    };

        return(
            <div className="UserLogOut">   
                <Link onClick={logout} to='/' className='text-white bg-dark'>Logout </Link>    
            </div>
        )
    }


export default UserLogOut;