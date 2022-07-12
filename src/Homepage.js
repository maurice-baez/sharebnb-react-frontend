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
            <h2 className="Homepage-welcome fade-in">
              Hello,{" "}
              <span className="Homepage-name fade-in">
                {currentUser.firstName}
              </span>
            </h2>
            <Link to="/listings">
              <button className="btn btn-outline-secondary btn-start mt-3 fade-in-btn">
                Let's get started...
              </button>
            </Link>
          </>
        ) : (
          <>
            <p className="Homepage-message">Lets find your next adventure...</p>
            <Link to="/login">
              <button className="btn btn-outline-primary btn__home">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-primary btn__home">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Homepage;
