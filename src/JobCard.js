import React from "react";
import "./Card.css"

class JobCard extends React.Component {
  render() {
    const job = this.props.jobData;
    return (
      <div className="Card">
        <div className="card-body">
          <h4 className="card-title">{job.title}</h4>
          <p className="card-text">Salary: {job.salary}</p>
          <p className="card-text">Equity: {job.equity}</p>
          <button type="button" className="btn btn-danger float-right">APPLY</button>
        </div>
      </div>
    )
  }
}

export default JobCard;
