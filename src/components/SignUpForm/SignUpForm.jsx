import React, { Component } from 'react';

export default class SignUpForm extends Component{
    state = {
        name: ' ',
        email: ' ',
        password: ' ',
        confirm: ' ',
        error:' ',
    }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
    
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,})
      })
      

      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
      
      let token = await fetchResponse.json() 
      window.localStorage.setItem('token', token);  
      
      const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
        <>
        <h1>Sign Up</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required class="form-control" id="exampleInputEmail1"/>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-primary" disabled={disable}>SIGN UP</button>
        </form>
</>
    );
  }
}