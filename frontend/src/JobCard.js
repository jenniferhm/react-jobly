import React from "react";
import "./Card.css"

class JobCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply(evt) {
    this.props.applyForJob(this.props.job.id);
    console.log("WE GOT TO APPLY", this.props.job.id)
  }

  render() {
    const { title, salary, equity, state } = this.props.job;
    console.log("THIS IS STATE", state)
    return (
      <div className="Card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">Salary: {salary}</p>
          <p className="card-text">Equity: {equity}</p>
          <button type="button" onClick={this.handleApply}  className="btn btn-danger float-right" disabled={state} >{state? "Applied" : "Apply"}</button>
        </div>
      </div>
    )
  }
}

export default JobCard;
