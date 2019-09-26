import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = ( // for now, hardcode token for "testing"
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getAllCompanies() {
    let res = await this.request("companies");
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getSearchedCompanies(query) {
    let res = await this.request(`companies/search=${query}`);
    return res.company;
  }

  static async getAllJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  static async getSearchedJobs(query) {
    let res = await this.request(`jobs/search=${query}`);
    return res.jobs;
  }

  static async login(username, password) {
    let res = await this.request("auth/login", {username, password}, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async editUser(username, formBody) {
    let res = await this.request(`users/${username}`, {username, formBody}, "patch");
    return res.user;
  }
}

export default JoblyApi;