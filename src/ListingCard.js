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
    <Link className="" to={`/listings/${listing.id}`}>
      <img className="card-img" src={listing.images[0]} alt={listing.title} />
      <span className="card-location">{listing.location}</span>
      <span className="card-type text-muted">{listing.type}</span>
      <span className="card-price">${listing.pricePerNight}</span> night
    </Link>
  );
}

export default ListingCard;
