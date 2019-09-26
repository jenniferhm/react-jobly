import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Routes from "./Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: false
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("_token");
    if(token) {this.setState({loggedInUser: true})} 
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Nav loggedInUser={this.state.loggedInUser}/>
          <Routes loggedInUser={this.state.loggedInUser} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
