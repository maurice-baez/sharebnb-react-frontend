import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchForm from "./SearchForm";

/** NavBar for site. Shows up on every page.
 *
 * Rendered by App.
 */

function NavBar() {
  return (
    <nav className="NavBar navbar navbar-expand-lg">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand col-3" to="/">
          ShareBnB
        </Link>
        <div className="col-6 mt-4">
          <SearchForm />
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/listings">
              Listings
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/listings/new">
              Add a Listing
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
