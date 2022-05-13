import ListingCard from "./ListingCard";

function BookingsList({bookings}){

    return (
        <div>
            {bookings.map(booking => <ListingCard listing={booking}/>)}
        </div>
    )
}

export default BookingsList;