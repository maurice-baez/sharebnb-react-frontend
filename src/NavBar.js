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

  const handleMenu = () => {
    document.querySelector(".header-menu").classList.toggle("is-active");
  };

  function loggedInNav() {
    return (
      <>
        <li className="header-menu__item">
          <NavLink
            className="header-menu__link header__link"
            to="/listings/new"
          >
            Add a Listing
          </NavLink>
        </li>
        <li className="header-menu__item">
          <NavLink className="header-menu__link header__link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="header-menu__item">
          <Link
            className="header-menu__link header__link"
            to="/"
            onClick={logout}
          >
            Log out
          </Link>
        </li>
      </>
    );
  }

  function loggedOutNav() {
    return (
      <>
        <li className="header-menu__item">
          <NavLink className="header-menu__link header__link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="header-menu__item">
          <NavLink className="header-menu__link header__link" to="/signup">
            Signup
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <header className="page__header header">
      <div className="header__container container">
        <div className="header__body">
          <div className="header__leftside">
            <Link className="header__logo header__link" to="/">
              sharebnb
            </Link>
          </div>
          <SearchForm searchFor={search} />
          <div className="header__rightside">
            <div className="header__menu header-menu">
              <ul className="header-menu__list">
                <li className="header-menu__item">
                  <NavLink
                    className="header-menu__link header__link"
                    to="/listings"
                  >
                    Listings
                  </NavLink>
                </li>
                {currentUser ? loggedInNav() : loggedOutNav()}
              </ul>
            </div>
            <div className="header__mob">
              <div className="header__mob-menu">
                <i className="bx bx-menu" onClick={handleMenu}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
