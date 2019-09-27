import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.registerUser(this.state);
    this.setState({
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    })
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text"
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange} />
        <label htmlFor="first_name">First Name:</label>
        <input type="text"
          id="first_name"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handleChange} />
        <label htmlFor="last_name">Last Name:</label>
        <input type="text"
          id="last_name"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="text"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange} />
        <button>Sign Up!</button><br />
      </form>
    )
  }
}

export default SignUpForm;
