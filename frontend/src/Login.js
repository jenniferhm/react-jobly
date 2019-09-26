import React from 'react';
import SignUpForm from './SignUpForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    this.props.login();
  }

  render() {
    const loggingIn = this.props.clicked

    return (
      <div className="Login">
        {loggingIn 
        ? (<React.Fragment>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" value={this.props.username}></input>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" value={this.props.password}></input>
          <button onSubmit={this.handleSubmit}>Submit</button>
          </React.Fragment>)
        : <SignUpForm />}
      </div>
    )
  }
}

export default Login;
