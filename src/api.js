import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class SharebnbApi {
  static token;

  static async request(endpoint, data = {}, method = "get", { type } = {}) {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { token: SharebnbApi.token, type };
    const params = method === "get" ? data : {};

    try {
      console.log(
        "url=",
        url,
        "method=",
        method,
        "data=",
        data,
        "params=",
        params,
        "headers=",
        headers
      );
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`login`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    console.log("data=", data);
    let res = await this.request(`signup`, data, "post");
    return res.token;
  }

  /** Add new Listing. */

  static async addListing(formData, files) {
    let reqForm = new FormData();
    files.forEach((file) => reqForm.append("image", file));
    Object.entries(formData).forEach((entry) =>
      reqForm.append(entry[0], entry[1])
    );
    console.log("reqForm=", reqForm.entries);
    let res = await this.request(`listings`, reqForm, "post", {
      "Content-type": "multipart/form-data",
    });
    return res.listing;
  }

  /** Get listings (filtered by title/description/ if not undefined) */

  static async getListings(searchTerm) {
    let res = await this.request("listings");

    return res.listings;
  }

  /** Get details on a listing by id. */

  static async getListingDetail(id) {
    let res = await this.request(`listings/${id}`);
    return res.listing;
  }

  /** Get messages by username. */

  static async getMessages(username) {
    let res = await this.request(`users/${username}/messages`);
    return res.messages;
  }
}

export default SharebnbApi;
