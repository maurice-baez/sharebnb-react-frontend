import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import "./ListingCard.css";

/** Show information about a listing
 *
 * Is rendered by ListingsList to show a "card" for each listing.
 *
 * ListingsList -> ListingCard
 */

function ListingCard({ listing }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(true);
  }

  function handleUnlike() {
    setLiked(false);
  }

  return (
    <Link className="" to={`/listings/${listing.id}`}>
      <div className="listings-card-img-container">
        <img className="card-img" src={listing.images[0]} alt={listing.title} />
        <button className="icon-btn">
          {liked ? (
            <BsSuitHeartFill
              className="liked-icon icon"
              onClick={handleUnlike}
            />
          ) : (
            <BsSuitHeart className="unliked-icon icon" onClick={handleLike} />
          )}
        </button>
      </div>
      <span className="card-location">{listing.location}</span>
      <span className="card-type text-muted">{listing.type}</span>
      <span className="card-price">${listing.pricePerNight}</span> night
    </Link>
  );
}

export default ListingCard;
