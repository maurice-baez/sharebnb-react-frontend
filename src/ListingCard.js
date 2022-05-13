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
          <p className="card-title card-header text-center">{listing.title}</p>
          <p className="card-location">{listing.location}</p>
          <p className="card-type">{listing.type}</p>
          <p className="card-price">{listing.pricePerNight}</p>
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;
