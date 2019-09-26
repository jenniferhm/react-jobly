import React from "react";
import "./Search.css";

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          className="form-control form-control-lg"
          name="searchQuery"
          placeholder="Enter search term..."
          value={this.state.searchQuery}
          onChange={this.handleChange} />
        <button type="submit" className="btn btn-lg btn-primary">Search</button>
      </form>
    )
  }
}

export default Search;
