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
    // this.handleApply = this.handleApply.bind(this);
  }

  // handleApply(evt) {
  //   this.props.apply();
  // }

  async componentDidMount() {
    const handle = this.props.match.params.company;
    let { name, description, jobs } = await JoblyApi.getCompany(handle);
    this.setState({name, description, jobs});
  }

  render() {
    const { name, description, jobs } = this.state;

    let jobsList = jobs.map(j => <JobCard key={uuid()} job={j} />)

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