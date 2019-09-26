import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Jobly</h1>
        <p>All the jobs in one convenient place.</p>
        {localStorage.getItem("_token")
          ? <h3>Welcome Back!</h3>
          : <Link to="/login"><button>Login</button></Link>}
      </div>
    )
  }
}

export default Home;
