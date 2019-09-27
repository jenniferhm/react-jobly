import React from "react";
import JoblyApi from "./JoblyApi";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { first_name, last_name, email, photo_url, username } = this.props.currentUser;
    this.state = {
      first_name: first_name || "",
      last_name: last_name || "",
      email: email || "",
      photo_url: photo_url || "",
      username: username || "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let profileUpdates = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      photo_url: this.state.photo_url,
      password: this.state.password
    }
    await JoblyApi.editUser(this.state.username, profileUpdates);

    await this.props.loadCurrentUser();
    this.props.history.push("/");
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <form className="Profile" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <p>{this.state.username}</p>
        </div>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input type="text"
            id="first_name"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input type="text"
            id="last_name"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="photo_url">Photo URL:</label>
          <input type="text"
            id="photo_url"
            name="photo_url"
            value={this.state.photo_url}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="password">Confirm Password:</label>
          <input type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} required/>
        </div>
        <button>Save Changes</button>
      </form>
    )
  }
}

export default Profile;
