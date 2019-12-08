import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import JoblyApi from './JoblyApi';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formShown: "login",
      errors: []
    };

    this.toggleFormShown = this.toggleFormShown.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  toggleFormShown(formName) {
    this.setState({ formShown: formName });
  }

  async loginUser(data) {
    let token;
    try {
      token = await JoblyApi.login(data);
    } catch (errors) {
      return this.setState({ errors });
    }
    localStorage.setItem('_token', token);
    await this.props.loadCurrentUser();
    this.props.history.push("/jobs");
  }

  async registerUser(data) {
    let token;
    try {
      token = await JoblyApi.register(data);
    } catch (errors) {
      return this.setState({ errors });
    }
    localStorage.setItem('_token', token);

    await this.props.loadCurrentUser();
    this.props.history.push("/jobs");
  }

  render() {
    return (
      <div className="login-signup">
        <button onClick={() => this.toggleFormShown("login")}>Login</button>
        <button onClick={() => this.toggleFormShown("signup")}>Sign Up</button>
        {this.state.formShown === "login"
          ? <LoginForm loginUser={this.loginUser} errors={this.state.errors} />
          : <SignUpForm registerUser={this.registerUser} />}
        {this.state.errors.length
          ? (alert(this.state.errors.map(msg => msg)))
          : null}
      </div>
    )
  }
}

export default Login;