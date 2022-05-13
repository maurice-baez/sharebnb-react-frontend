import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import ListingsList from "./ListingsList";
import NewListingForm from "./NewListingForm";
import Profile from "./Profile";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



/** Site-wide routes.
 *
 * Visiting a non-existent route navigates to the homepage.
 */

function RoutesList({login, addListing, currentUser }) {
  console.debug("Routes");

  return (
    <div className="pt-5">
      <Routes>
        {!currentUser &&
        <>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/login" element={<LoginForm login={login} />}/>
        <Route path="/listings" element={<ListingsList />}/>
        </>
}
        <Route path="/listings/new" element={<NewListingForm addListing={addListing} />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<Navigate to="/" /> } />


      </Routes>
    </div>
  );
}

export default RoutesList;