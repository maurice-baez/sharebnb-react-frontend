import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import ListingsList from "./ListingsList";
import NewListingForm from "./NewListingForm";
import Profile from "./Profile";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import UserContext from "./UserContext";

/** Site-wide routes.
 *
 * Visiting a non-existent route navigates to the homepage.
 */

function RoutesList({ login, signup, addListing }) {
  console.debug("Routes");
  const { currentUser } = useContext(UserContext);
  debugger
  return (
    <div className="pt-5">
      <Routes>
        {/* unprotected routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/listings" element={<ListingsList />} />

        {!currentUser && (
          <>
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route path="/login" element={<LoginForm login={login} />} />
          </>
        )}

        {/* protected routes */}
        {currentUser && (
          <>
            <Route
              path="/listings/new"
              element={<NewListingForm addListing={addListing} />}
            />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>
  );
}

export default RoutesList;
