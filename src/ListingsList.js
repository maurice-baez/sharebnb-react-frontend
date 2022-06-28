import { useState, useEffect } from "react";
import SharebnbApi from "./api";
import ListingCard from "./ListingCard";
import SearchForm from "./SearchForm";
import LoadingSpinner from "./LoadingSpinner";
import "./ListingsList.css";

function ListingsList() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(function getListingsOnRender() {
  //   async function getListingsFromAPI() {
  //     const listings = await SharebnbApi.getListings();
  //     setListings(listings);
  //   }

  //   getListingsFromAPI();
  // }, []);

  useEffect(function getAllListingsOnMount() {
    search();
  }, []);

  const search = async (searchTerm) => {
    const listings = await SharebnbApi.getListings(searchTerm);
    setListings(listings);
    setIsLoading(false);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container">
      <div className="search__container">
        <SearchForm searchFor={search} />
      </div>
      <div className="listings__container">
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
    </div>
  );
}

export default ListingsList;
