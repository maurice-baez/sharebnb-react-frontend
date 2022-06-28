import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharebnbApi from "./api";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import "./ListingDetail.css";

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(true);
  }

  function handleUnlike() {
    setLiked(false);
  }

  useEffect(
    function getListingOnRender() {
      async function getListing(id) {
        const listing = await SharebnbApi.getListingDetail(id);
        setListing(listing);
        setIsLoading(false);
      }
      getListing(id);
    },
    [id]
  );

  if (isLoading) return <i>Loading...</i>;

  return (
    <div className="listing-detail-container container">
      <div className="container mt-5 listing-title">{listing.title}</div>
      <div className="listingDetail-card container">
        <div className="listing-left-side">
          <div className="listings-card-img-container-detail listingDetail-img">
            <img
              className="card-img"
              src={listing.images[0]}
              alt={listing.title}
            />
            <button className="icon-btn-detail">
              {liked ? (
                <BsSuitHeartFill
                  className="liked-icon-detail icon-detail"
                  onClick={handleUnlike}
                />
              ) : (
                <BsSuitHeart
                  className="unliked-icon-detail icon-detail"
                  onClick={handleLike}
                />
              )}
            </button>
          </div>
        </div>

        <div className="listing-right-side">
          <div className="listings-card">
            <div className="listing-description">{listing.description}</div>
            <div className="listing-price-and-btn">
              <div>
                <span className="listing-price">${listing.pricePerNight}</span>{" "}
                night
              </div>
              <form className="ListingDetail-form">
                <button className="btn btn-outline-light btn-lg listing-btn">
                  Reserve
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container listing-location">{listing.location}</div>
    </div>
  );
}

export default ListingDetail;
