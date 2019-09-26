import React from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import uuid from "uuid/v4";

class Company extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      jobs: []
    }
    // this.handleApply = this.handleApply.bind(this);
  }

  // handleApply(evt) {
  //   this.props.apply();
  // }

  async componentDidMount() {
    let handle = this.props.match.params.company;
    let { name, description, jobs } = await JoblyApi.getCompany(handle);
    this.setState({name, description, jobs});
  }

  render() {
    const { name, description, jobs } = this.state;

    let jobsList = jobs.map(j => <JobCard key={uuid()} jobData={j} />)

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