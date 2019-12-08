import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";

class Routes extends React.Component {
  render() {
    let loggedIn = this.props.currentUser;
    return (
      <Switch>
        <Route exact path="/login" render={rtProps => <Login {...rtProps} loadCurrentUser={this.props.loadCurrentUser} />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/companies" render={() => <Companies />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/companies/:company" render={rtProps => (
          <Company {...rtProps} applyForJob={this.props.applyForJob} />
          )} />
        <PrivateRoute loggedIn={loggedIn} exact path="/jobs" render={() => <Jobs applyForJob={this.props.applyForJob} />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/profile" render={rtProps => <Profile {...rtProps} loadCurrentUser={this.props.loadCurrentUser}  currentUser={this.props.currentUser} />} />
        <Route exact path="/" render={() => <Home />} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;
