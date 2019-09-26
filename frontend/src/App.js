import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Routes from "./Routes";
import JoblyApi from "./JoblyApi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  async componentDidMount() {
    if(localStorage.getItem("_token")) {
      await this.loadCurrentUser();
    }
  }
  
  async loadCurrentUser() {
    const token = localStorage.getItem("_token");
    const response = await JoblyApi.getUser(token);

    this.setState({ currentUser: response.data })
  }



  handleLogOut() {
    localStorage.removeItem("_token");
    this.setState({currentUser: null});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav currentUser={this.state.currentUser} logout={this.handleLogOut} />
          <Routes currentUser={this.state.currentUser} loadCurrentUser={this.loadCurrentUser} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
