import React from "react";
import Header from "../../commponents/Header/Header";
import BookText from "../../commponents/ComponentsForBookingFields/bookText/BookText";
import DateAndGuests from "../../commponents/ComponentsForBookingFields/DateAndGuests/DateAndGuests";
import Footer from "../../commponents/Footer/Footer";

function BookingField() {
    return (
        <div className="wrapper">
            <Header />
            <BookText />
            <DateAndGuests />
            <Footer />
        </div>
    );
}

export default BookingField