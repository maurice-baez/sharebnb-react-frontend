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

function RoutesList() {
  console.debug("Routes");

  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/listings" element={<ListingsList />}/>
        <Route path="/listings/new" element={<NewListingForm />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route element={<Navigate to="/" /> } />
      </Routes>
    </div>
  );
}

export default RoutesList;