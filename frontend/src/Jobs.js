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
    this.handleApply = this.handleApply.bind(this);
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getAllJobs();
    this.setState({ jobs });
  }

  async jobSearch(query) {
    let jobs = await JoblyApi.getSearchedJobs(query);
    this.setState({ jobs });
  }

  async handleApply(id) {
    let message = await JoblyApi.apply(id);
    this.setState(st => ({
      jobs: st.jobs.map(job => (
        job.id === id
        ? {...job, state: message}
        :job
      ))
    }))
  }

  render() {
    let jobsList = this.state.jobs.map(j => (
      <div key={uuid()}>
        <JobCard job={j} handleApply={this.handleApply} />
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
