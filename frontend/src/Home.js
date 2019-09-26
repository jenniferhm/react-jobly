import React from "react";
import { Link } from "react-router-dom";

class Home extends React.PureComponent {
  render() {
    console.log("THIS IS PROPS IN HOME", this.props.loggedInUser)

    return (
      <div className="Home">
        <h1>Jobly</h1>
        <p>All the jobs in one convenient place.</p>
        {this.props.loggedInUser
          ? <h3>Welcome Back!</h3>
          : <Link to="/login"><button>Login</button></Link>}
      </div>
    )
  }
}

export default Home;
