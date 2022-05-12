import React, { useState } from "react";

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
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
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
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
