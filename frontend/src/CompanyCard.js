import React from "react";
import "./Card.css"

class CompanyCard extends React.PureComponent {
  render() {
    const { name, description, logo_url } = this.props.company;
    return (
      <div className="Card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <img src={logo_url} alt="company logo"></img>
            <p className="card-text">{description}</p>
          </div>
      </div>
    )
  }
}

export default CompanyCard;
