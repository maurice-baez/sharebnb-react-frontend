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
    <div className="container d-flex ListingDetail-card">
      <img
        src={listing.images[0]}
        alt={listing.title}
        className="col-6 ListingDetail-img text-left"
      />

      <div className="col-6 text-center d-flex flex-column card justify-content-center listings-card align-items-center">
        <h2 className="text-center mb-4">{listing.title}</h2>
        <h4 className="text-center mb-4">{listing.location}</h4>
        <h4 className="text-center mb-4">{listing.description}</h4>
        <h4 className="text-center mb-4">{listing.type}</h4>
        <h4 className="text-center mb-4">${listing.pricePerNight}/per night</h4>
        <form className="ListingDetail-form">
        <button className="btn btn-outline-light btn-lg ">Book</button>
        </form>
      </div>
    </div>
  );
}

export default ListingDetail;
