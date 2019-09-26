import React from 'react';

class Home extends React.Component {
  render() {
    const loggedIn = true; //this.props.loggedIn needs to be passed
    //also need to pass in a handlelogin prop below
    return (
      <div className="Home">
        <h1>Jobly</h1>
        <p>All the jobs in one convenient place.</p>
        {loggedIn ? <h3>Welcome Back!</h3> : <button onClick={this.props.handleLogin}>Login</button>}
      </div>
    )
  }
}

export default Home;
