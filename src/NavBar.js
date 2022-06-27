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

  // return (
  //   <nav className="NavBar navbar navbar-expand-lg">
  //     <div className="container-fluid d-flex">
  //       <Link className="navbar-brand col-3" to="/">
  //         sharebnb
  //       </Link>
  //       <div className="col-6 mt-4">
  //         <SearchForm searchFor={search} />
  //       </div>
  //       <ul className="navbar-nav ms-auto">
  //         <li className="nav-item me-4">
  //           <NavLink className="nav-link" to="/listings">
  //             Listings
  //           </NavLink>
  //         </li>
  //         {currentUser ? loggedInNav() : loggedOutNav()}
  //       </ul>
  //     </div>
  //   </nav>
  // );
  return (
    <header class="page__header header">
      <div class="header__container container">
        <div class="header__body">
          <div class="header__leftside">
            <Link className="header__logo header__link" to="/">
              sharebnb
            </Link>
          </div>
          <div class="header__rightside">
            <div class="header__menu header-menu">
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
                {/* <ul class="header-menu__list">
                <li class="header-menu__item">
                  <a
                    href="#home"
                    title="Landing Page"
                    class="header-menu__link"
                  >
                    Home
                  </a>
                </li>
                <li class="header-menu__item">
                  <a href="#about" title="About me" class="header-menu__link">
                    About
                  </a>
                </li>
                <li class="header-menu__item">
                  <a
                    href="#portfolio"
                    title="Portfolio"
                    class="header-menu__link"
                  >
                    Portfolio
                  </a>
                </li>
                <li class="header-menu__item">
                  <a
                    href="#contact"
                    title="Contact Me"
                    class="header-menu__link"
                  >
                    Contact
                  </a>
                </li>
              </ul> */}
              </ul>
            </div>
            {/* <div class="header__changer">
              <div class="header__moon">
                <i class="bx bx-moon"></i>
              </div>
            </div> */}
            <div class="header__mob">
              <div class="header__mob-menu">
                <i class="bx bx-menu" onClick={handleMenu}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
