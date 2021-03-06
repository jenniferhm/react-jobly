import axios from "axios";
import { decode } from "jsonwebtoken";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    // paramsOrData._token = ( // for now, hardcode token for "testing"
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    //   "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    //   "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
    paramsOrData._token = localStorage.getItem("_token");
    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
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
    let res = await this.request("companies", { search: query });
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  static async getSearchedJobs(query) {
    let res = await this.request("jobs", { search: query });
    return res.jobs;
  }

  static async login(data) {
    let res = await this.request("login", data, "post");
    return res.token;
  }

  static async register(data) {
    let res = await this.request("users", data, "post");
    return res.token;
  }

  static async getUser(token) {
    const { username } = decode(token);
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async editUser(username, profileUpdates) {
    if (!profileUpdates.photo_url) profileUpdates.photo_url = "https://www.flaticon.com/free-icon/user_181549#term=profile&page=1&position=9"
    await this.request(`users/${username}`, profileUpdates, "patch");
    return "SUCCESS";
  }

  static async apply(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res.message;
  }
}

export default JoblyApi;