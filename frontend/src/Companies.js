import React from "react";
import { Link } from "react-router-dom";
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
    this.companySearch = this.companySearch.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getAllCompanies();
    this.setState({ companies });
  }

  async companySearch(query) {
    let companies = await JoblyApi.getSearchedCompanies(query);
    this.setState({ companies });
  }

  render() {
    let companiesList = this.state.companies.map(c => (
      <div key={uuid()}>
        <Link to={`companies/${c.handle}`}><CompanyCard compData={c} /></Link>
      </div>
    ));
    return (
      <div className="Companies">
        <Search search={this.companySearch} />
        {companiesList}
      </div>
    )
  }
}

export default Companies;
