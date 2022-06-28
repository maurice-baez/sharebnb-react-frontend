import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  console.debug("searchTerm=", searchTerm);

  /** Tell parent to filter */
  async function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    await searchFor(searchTerm.trim() || undefined);
    const term = searchTerm;
    setSearchTerm("");
    navigate(`/listings?q=${term}`);
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="search__form">
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className="">
            <input
              className="form-control search__field"
              name="searchTerm"
              placeholder="Search for your perfect space..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn__search">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
