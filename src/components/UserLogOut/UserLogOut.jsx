import React from "react";
import { Link } from "react-router-dom";

class UserLogOut extends React.Component{
    state={
        loggedOut: false
    }

    logout=()=>{
        window.localStorage.clear('token');
        this.props.setUserInState(null)
    };


    render(){
        return(
            <div className="UserLogOut">   
                <Link onClick={this.logout} to='/' className='btn-sm'>Logout </Link>    
            </div>
        )
    }
}

export default UserLogOut;