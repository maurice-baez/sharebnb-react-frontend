import { useContext } from "react";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import BookingsList from "./BookingsList";
import ListingsList from "./ListingsList";
import BookingMessages from "./BookingMessages";
import ListingMessages from "./ListingMessages";
import SharebnbApi from "./api";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(UserContext);
  const [bookingMessages, setBookingMessages] = useState([]);
  const [listingMessages, setListingMessages] = useState([]);

  useEffect(function getAllMessages() {
    async function getMessagesAPI() {
      const messages = await SharebnbApi.getMessages(currentUser.username);
      const userListingMessages = messages.filter((message) => {
        return (
          currentUser.listings.filter(
            (listing) => listing.id === message.listingID
          ).length > 0
        );
      });
      const userBookingMessages = messages.filter((message) => {
        return (
          currentUser.listings.filter(
            (listing) => listing.id !== message.listingID
          ).length > 0
        );
      });

      setBookingMessages(userBookingMessages);
      setListingMessages(userListingMessages);
    }

    getMessagesAPI();
  }, []);

  return (
    <div className="container profile__container mt-4">
      {/* <div>
        <BookingsList bookings={currentUser.bookings} />
        <ListingsList listings={currentUser.listings} />
        <ListingMessages messages={listingMessages} />
        /<BookingMessages messages={bookingMessages} />
      </div> */}
      <img
        src={currentUser.imageUrl}
        alt=""
        className="profile-img img-fluid"
      />
    </div>
  );
}

export default Profile;
