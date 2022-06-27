import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharebnbApi from "./api";
import "./ListingDetail.css";

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <div className="container mt-5 listing-title">{listing.title}</div>
      <div className="listingDetail-card container">
        <div className="listing-left-side">
          <div className="listingDetail-img">
            <img src={listing.images[0]} alt={listing.title} />
          </div>
        </div>

        <div className="listing-right-side">
          <div className="listings-card">
            <div className="listing-description">{listing.description}</div>
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
      <div className="container listing-location">{listing.location}</div>
    </>
  );
}

export default ListingDetail;
