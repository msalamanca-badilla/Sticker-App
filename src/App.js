import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import TickerPage from './pages/TickerPage/TickerPage';
import LoginForm from './components/LoginForm/LoginForm';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import Nav from './components/Nav/Nav'
import DetailsPage from './pages/DetailsPage/DetailsPage';

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

  render() {
    return (
      <main className="App">
        {this.state.user ? (
          <div>
              <Switch>
                <Route path='/tickers/details' render={(props) => (
                    <DetailsPage {...props}/> 
                  )}/>
                <Route exact path='/'>
                  <Redirect to = '/tickers'/>
                </Route>
                <Route path='/tickers' render={(props) => (
                    <TickerPage {...props} setUserInState={this.setUserInState}/>
                  )}/>
                <Route path='/watchlist' render={(props) => (
                    <WatchlistPage {...props}/> 
                  )}/>
              </Switch>
            <Nav setUserInState={this.setUserInState}/>
          </div>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}

      </main>
    );
  }
}

export default App;