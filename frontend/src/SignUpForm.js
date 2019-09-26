import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    })
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  render() {
    return (
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" value={this.state.username} onChange={this.handleChange}></input>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" value={this.state.password}></input>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
        <button>Sign Up!</button>
      </form>
    )
  }
}

export default SignUpForm;
