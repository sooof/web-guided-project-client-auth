import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //1. axios call http://localhost:3000/api/login pass in username and password through the body
    axios.post('http://localhost:3000/api/login', this.state.credentials)
      .then(resp=>{
      //2. if the call is successful: save token in localStorage
      console.log(resp);
      localStorage.setItem('token', resp.data.token);
      })
      .catch(err=>{
      //3. if the call is unsuccessful: console.log error
      console.log(err);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;