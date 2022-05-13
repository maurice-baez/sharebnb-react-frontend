import { useContext } from "react";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import BookingsList from "./BookingsList";
import ListingsList from "./ListingsList";
import BookingMessages from "./BookingMessages";
import ListingMessages from "./ListingMessages";
import SharebnbApi from "./api";

function Profile() {
    const { currentUser } = useContext(UserContext);
    const [bookingMessages, setBookingMessages] = useState([]);
    const [listingMessages, setListingMessages] = useState([]);

    useEffect(function getAllMessages() {
        async function getMessagesAPI() {
            const messages = SharebnbApi.getMessages(currentUser.username);
            const userListingMessages = messages.filter(message => {
                return currentUser.listings.filter(listing => listing.id === message.listingID).length > 0;
            });
            const userBookingMessages = messages.filter(message => {
                return currentUser.listings.filter(listing => listing.id !== message.listingID).length > 0;
            });

            setBookingMessages(userBookingMessages);
            setListingMessages(userListingMessages);
        }

        getMessagesAPI();

    }, []);

    return (
        <div>
            <BookingsList bookings={currentUser.bookings} />
            <ListingsList listings={currentUser.listings} />
            <ListingMessages messages={listingMessages} />
            <BookingMessages messages={bookingMessages} />
        </div>
    )
}

export default Profile