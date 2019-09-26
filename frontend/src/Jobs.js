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
  }

  async componentDidMount() {
    let jobsList = await JoblyApi.getAllJobs();
    this.setState({ jobs: jobsList });
  }

  render() {
    let jobslist = this.state.jobs.map(j => (
      <div>
        <JobCard key={uuid()} jobData={j} />
      </div>
    ));
    return (
      <div className="Jobs">
        <Search />
        {jobslist}
      </div>
    )
  }
}

export default Jobs;
