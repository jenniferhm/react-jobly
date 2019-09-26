import React from "react";
import "./Card.css"

class CompanyCard extends React.Component {
  render() {
    const { name, description, image } = this.props.compData;
    return (
      <div className="Card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <img src={image} alt="company logo"></img>
            <p className="card-text">{description}</p>
          </div>
      </div>
    )
  }
}

export default CompanyCard;
