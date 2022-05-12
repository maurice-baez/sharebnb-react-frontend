import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class SharebnbApi {

  static token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1iYWV6In0.5_MG8aMPvvmuSBcFIjkotscXsZ6DUPWAY_2XKaV9Z0I"

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { token: SharebnbApi.token };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

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

}

export default SharebnbApi;
