import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import TickerPage from './pages/TickerPage/TickerPage';
import LoginForm from './components/LoginForm/LoginForm'
class App extends Component {
  state = {
    user: null,
  }

  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  
  componentDidMount() {
    let token = window.localStorage.getItem('token')
    if (token) {
      
      let userDoc = JSON.parse(atob(token.split('.')[1])).user 
      this.setState({user: userDoc})      
    }
  }

  logout = () => {
    let token = localStorage.getItem('token')
    if (token){
      token= null
      window.localStorage.removeItem('token')
      this.setState({ user: null })
    }
  }
  render() {
    return (
      <main className="App">
        <Route path='/tickers' render={(props) => (
            <TickerPage {...props}/>
          )}/>
        <Route path='/account/login' render={() => (
            <AuthPage path = '/account/login' setUserInState={this.setUserInState} />
          )}/>

        {/* {this.state.user ? (
          <Switch>
              <Route path='/tickers' render={(props) => (
                <TickerPage {...props}/>
              )}/>
            <Redirect to="/tickers" />
          </Switch>
        ) : (
          <AuthPage path = '/account/login' setUserInState={this.setUserInState} />
        )} */}
      </main>
    );
  }
}

export default App;