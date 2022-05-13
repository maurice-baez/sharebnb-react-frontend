import React, { useContext } from "react";
import "./Homepage.css";
import UserContext from "./UserContext";


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
        <h1 className="mb-4 fw-bold">ShareBnb</h1>
        {currentUser &&
        <h2>Hello, {currentUser.firstName}</h2>
        }
      </div>
    </div>
  );
}

export default Homepage;