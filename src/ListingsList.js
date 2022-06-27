import { useState, useEffect } from "react";
import SharebnbApi from "./api";
import ListingCard from "./ListingCard";
import "./ListingsList.css";

function ListingsList() {
  const [listings, setListings] = useState([]);

  useEffect(function getListingsOnRender() {
    async function getListingsFromAPI() {
      const listings = await SharebnbApi.getListings();
      setListings(listings);
    }

    getListingsFromAPI();
  }, []);

  return (
    <div className="container listings__container">
      {listings ? (
        listings.map((l) => (
          <div key={l.id} className="listing__card">
            <ListingCard listing={l} />
          </div>
        ))
      ) : (
        <div>Error loading listings</div>
      )}
    </div>
  );
}

export default ListingsList;
