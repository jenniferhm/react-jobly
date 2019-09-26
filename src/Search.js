import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <input className="form-control form-control-lg" name="search" placeholder="Enter search term..."/>
        <button type="submit" className="btn btn-lg btn-primary">Search</button>
      </form>
    )
  }
}

export default Search;
