import React from "react";
import { NavLink } from "react-router-dom"

class Nav extends React.Component {
  render() {
    const loggedIn = true;
    return (
      <nav className="Navigation navbar navbar-expand-md">
        <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {loggedIn
            ? (<ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4"><NavLink exact to="/companies">Companies</NavLink></li>
              <li className="nav-item mr-4"><NavLink exact to="/jobs">Jobs</NavLink></li>
              <li className="nav-item mr-4"><NavLink exact to="/profile">Profile</NavLink></li>
              <li className="nav-item mr-4"><NavLink exact to="/logout">Logout</NavLink></li>
            </ul>)
            : <li className="nav-item"><NavLink exact to="/login">Login</NavLink></li>}
        </div>
      </nav>
    )
  }
}

export default Nav;
