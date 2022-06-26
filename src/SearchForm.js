import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./SearchForm.css";

/** Search form.
 *
 * Appears on NavBar
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * NavBar -> SearchForm
 */

function SearchForm({ searchFor }) {

  const [searchTerm, setSearchTerm] = useState("");
  console.debug("searchTerm=", searchTerm)

  /** Tell parent to filter */
  async function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    await searchFor(searchTerm.trim() || undefined);
    setSearchTerm("");
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="SearchForm mb-4">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center gx-0">
          <div className="col-8">
            <input
              className="form-control"
              name="searchTerm"
              placeholder="Search for your perfect space..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" id="btn-search" className="btn btn-outline-light">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
