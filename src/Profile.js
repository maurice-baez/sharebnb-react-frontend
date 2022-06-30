import { useContext } from "react";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import BookingsList from "./BookingsList";
import ListingsList from "./ListingsList";
import BookingMessages from "./BookingMessages";
import ListingMessages from "./ListingMessages";
import SharebnbApi from "./api";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(UserContext);
  const [bookingMessages, setBookingMessages] = useState([]);
  const [listingMessages, setListingMessages] = useState([]);

  // useEffect(function getAllMessages() {
  //   async function getMessagesAPI() {
  //     const messages = await SharebnbApi.getMessages(currentUser.username);
  //     const userListingMessages = messages.filter((message) => {
  //       return (
  //         currentUser.listings.filter(
  //           (listing) => listing.id === message.listingID
  //         ).length > 0
  //       );
  //     });
  //     const userBookingMessages = messages.filter((message) => {
  //       return (
  //         currentUser.listings.filter(
  //           (listing) => listing.id !== message.listingID
  //         ).length > 0
  //       );
  //     });

  //     setBookingMessages(userBookingMessages);
  //     setListingMessages(userListingMessages);
  //   }

  //   getMessagesAPI();
  // }, []);

  // console.log("BOOKINGSMSGS+", bookingMessages);
  // console.log("LISTINGSMSGS=", listingMessages);

  return (
    <div className="container profile__container mt-4">
      <div className="card profile__card profile__userinfo">
        <img src={currentUser.imageUrl} alt={currentUser.firstName} />
        <span className="profile__location">
          <GoLocation />
          {currentUser.location || "Anywhere"}
        </span>

        {/* <div className="profile__details">{currentUser.firstName}</div> */}
      </div>
      <div className="card profile__card profile__spaces">
        Your Saved Spaces:
        <Link to="/listings/34">
          <div className="placeholder__space">
            <img src="../images/mossbeach.webp" alt="temp" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
