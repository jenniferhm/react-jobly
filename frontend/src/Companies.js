import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";
import uuid from "uuid/v4"

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
  }

  async componentDidMount() {
    let companiesList = await JoblyApi.getAllCompanies();
    this.setState({companies: companiesList});
  }

  render() {
    let companiesList = this.state.companies.map(c => (
      <div key={uuid()}>
        <Link to={`companies/${c.handle}`}><CompanyCard compData={c}/></Link>
      </div>
    ));
    return (
      <div className="Companies">
        <Search />
        {companiesList}
      </div>
    )
  }
}

export default Companies;
