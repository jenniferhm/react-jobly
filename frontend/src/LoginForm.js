import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.loginUser(this.state);
    this.setState({
      username: "",
      password: ""
    });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div><label htmlFor="username">Username:</label>
          <input type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange} />
        </div>
        <div><label htmlFor="password">Password:</label>
          <input type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </div>
        <button>Login</button><br />
      </form>
    )
  }
}

export default LoginForm;
