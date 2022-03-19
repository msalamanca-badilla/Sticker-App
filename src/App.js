import './App.css';
import Sticker from './components/SignUpForm/SignUpForm.jsx'

function App() {
  state={
    user:null,
  }
setUserInState=(incomingUserData)=>{
  this.setState({user:incomingUserData})
}

  return (
    // <div className="App">
    //   <container>
    //     <h1>Sticker</h1>
    //     <Sticker />
    //     </container>
    // </div>

<main className="App">
{/* this ternary operator asks: is there a user in state? */}
{/* if yes, they can see our pages: neworder, etc. */}
{/* if no(user is null), show them only the <AuthPage> */}
{ this.state.user ? 
  <Switch>
    <Route path='/orders/new' render={(props) => (
      <NewOrderPage {...props}/>
    )}/>
    <Route path='/orders' render={(props) => (
      <OrderHistoryPage {...props}/>
    )}/>
    <Redirect to="/orders" />
  </Switch>
  :
  <AuthPage setUserInState={this.setUserInState}/>
}
</main>
  );
}

export default App;
