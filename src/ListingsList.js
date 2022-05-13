import { useState, useEffect } from "react"
import SharebnbApi from "./api"

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
    <div>
      <ul>
        {listings.map(l =>
          <li key={l.id}>{l.title}</li>
        )}
      </ul>
    </div>
  )
}

export default ListingsList