import React from 'react'
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';


export default class AuthPage extends React.Component {
  state = {
    showLogin:false,
  }

  render() {
    return (
      <main className="AuthPage">
        {this.state.showLogin ? 
          <LoginForm setUserInState={this.props.setUserInState}/> : 
          <SignUpForm setUserInState={this.props.setUserInState} />}
        <p onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
          {this.state.showLogin ? 'Don"t have an account yet? Sign up!' : `Already have an account? Login`}
        </p>
      </main>
      
    );
  }
}