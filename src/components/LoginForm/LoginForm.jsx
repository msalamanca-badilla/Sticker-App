import { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
    
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })

      
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() 
      localStorage.setItem('token', token);  

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
      <>
      <h1>Sticker</h1>
      <form autoComplete="off" onSubmit={this.handleSubmit}>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required className="form-control" id="exampleInputEmail1"/>
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className="btn btn-primary">LOGIN</button>
      </form>
</>
    );
  }
}