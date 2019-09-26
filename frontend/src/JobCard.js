import React from "react";
import "./Card.css"

class JobCard extends React.PureComponent {
  render() {
    const { title, salary, equity } = this.props.job;
    return (
      <div className="Card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">Salary: {salary}</p>
          <p className="card-text">Equity: {equity}</p>
          <button type="button" className="btn btn-danger float-right">APPLY</button>
        </div>
      </div>
    )
  }
}

export default JobCard;
