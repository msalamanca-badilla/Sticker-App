import React from "react";
import { Link } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm'
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from "../../pages/AuthPage/AuthPage";
class UserLogOut extends React.Component{
    state={
        loggedOut: false
    }

    logout=()=>{
        window.localStorage.clear('token');
        this.setState({loggedOut: true});
    };


    render(){
        return(
            <div className="UserLogOut">   
            <Link onClick={this.logout} to='/users/login' className='btn-sm'>Logout </Link>
            </div>
        )
    }
}

export default UserLogOut;