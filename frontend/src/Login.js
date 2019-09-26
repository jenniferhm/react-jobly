import React from 'react';
import SignUpForm from './SignUpForm';
import JoblyApi from './JoblyApi';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      // first_name: "",
      // last_name: "",
      // email: "",
      formShown: "login"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.login(this.state.username, this.state.password);
    localStorage.setItem('_token', token);
    await this.props.loadCurrentUser();
    this.props.history.push("/jobs");
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSignUp(evt) {
    this.setState({signingUp: !this.state.signingUp});
  }

  toggleFormShown() {
    this.setState({formShown: !this.state.formShown})
  }

render() {
  return (
    <div>
      {this.state.formShown === "login"
        ? (<form className="Login" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <button>Submit</button><br />
          <button onClick={this.handleSignUp} > {console.log("I GOT CLICKED")}Sign Up</button>
        </form>)
        : < SignUpForm />}
    </div>
  )
}
}

export default Login;
