import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import "./NavBar.css";
import SearchForm from "./SearchForm";

/** NavBar for site. Shows up on every page.
 *
 * Rendered by App.
 *
 */

function NavBar({ logout, search }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/listings/new">
            Add a Listing
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="NavBar navbar navbar-expand-lg">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand col-3" to="/">
          ShareBnB
        </Link>
        <div className="col-6 mt-4">
          <SearchForm search={search} />
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/listings">
              Listings
            </NavLink>
          </li>
          {currentUser ? loggedInNav() : loggedOutNav()}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
