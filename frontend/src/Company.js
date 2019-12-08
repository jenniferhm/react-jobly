import React from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import uuid from "uuid/v4";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      jobs: []
    }
  }

  async componentDidMount() {
    const handle = this.props.match.params.company;
    let { name, description, jobs } = await JoblyApi.getCompany(handle);
    this.setState({name, description, jobs});
  }

  render() {
    const { name, description, jobs } = this.state;

    let jobsList = jobs.map(j => (
      <div key={uuid()}>
        <JobCard job={j} applyForJob={this.props.applyForJob} />
      </div>
    ));

    return (
      <div className="Company">
        <h2>{name}</h2>
        <p>{description}</p>
        {jobsList}
      </div>
    )
  }
}

export default Company;