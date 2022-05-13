import React, { useContext } from "react";
import "./Homepage.css";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

/** Homepage of site.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 Homepage-title">sharebnb</h1>
        {currentUser ? (
          <>
            <h2 className="Homepage-welcome">
              Hello,{" "}
              <span className="Homepage-name">{currentUser.firstName}</span>
            </h2>
            <Link to="/listings">
              <button className="btn btn-outline-light mt-2">
                Let's get started
              </button>
            </Link>
          </>
        ) : (
          <>
            <p className="Homepage-message">Lets find your perfect space...</p>
            <Link to="/login">
              <button className="btn btn-outline-light m-3">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-light m-3">Signup</button>
            </Link>
          </>
        )}
      </div>

    </div>
  );
}

export default Homepage;
