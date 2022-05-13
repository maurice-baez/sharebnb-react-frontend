import { useState, useEffect } from "react"
import SharebnbApi from "./api"
import ListingCard from "./ListingCard";

function ListingsList(){

  const [listings, setListings] = useState([]);

  useEffect(function getListingsOnRender(){
    async function getListingsFromAPI(){
      const listings = await SharebnbApi.getListings();
      setListings(listings)
    }

    getListingsFromAPI();
  }, [])

  return (
    <div className="ListingsList-container container d-flex">
      <div className="row">
        {listings.map(l =>
          <div key={l.id} className="col-4"><ListingCard listing={l} /></div>
        )}
      </div>
    </div>
  )
}

export default ListingsList