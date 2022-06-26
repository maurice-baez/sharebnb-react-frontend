import React from "react";
import { Link } from "react-router-dom";

import "./ListingCard.css";

/** Show information about a listing
 *
 * Is rendered by ListingsList to show a "card" for each listing.
 *
 * ListingsList -> ListingCard
 */

function ListingCard({ listing }) {
  return (
    <Link className="ListingsCard card" to={`/listings/${listing.id}`}>
      <div className="Listing-card">
        <img className="card-img" src={listing.images[0]} alt={listing.title} />
        <div className="card-body">
          <p className="card-title card-header text-center lead">{listing.title}</p>
          <p className="card-location text-center">{listing.location}</p>
          <p className="card-type text-center">Space Type: {listing.type}</p>
          <p className="card-price text-center">${listing.pricePerNight}/per night</p>
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;

