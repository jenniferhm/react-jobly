import React from "react";
import JobCard from "./JobCard";
import Search from "./Search";
import JoblyApi from "./JoblyApi";
import uuid from "uuid/v4"

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
    this.jobSearch = this.jobSearch.bind(this);
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getAllJobs();
    this.setState({ jobs });
  }

  async jobSearch(query) {
    let jobs = await JoblyApi.getSearchedJobs(query);
    this.setState({ jobs });
  }

  render() {
    let jobsList = this.state.jobs.map(j => (
      <div key={uuid()}>
        <JobCard job={j} />
      </div>
    ));

    return (
      <div className="Jobs">
        <Search search={this.jobSearch} />
        {jobsList}
      </div>
    )
  }
}

export default Jobs;
