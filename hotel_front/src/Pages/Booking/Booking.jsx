import React from "react";
import Header from "../../commponents/Header/Header";
import Footer from "../../commponents/Footer/Footer";
import BookingText from "../../commponents/componentsForBookingPage/Text/BookingText"
import DatesAndGuests from "../../commponents/componentsForBookingPage/DatesAndGuests/DatesAndGuests"
import ChooseRoom from "../../commponents/componentsForBookingPage/ChooseRoom/ChooseRoom"

function Booking() {
    return(
        <div className="wrapper">
            <Header />
            <BookingText />
            <DatesAndGuests />
            <ChooseRoom />
            <Footer />
        </div>
    );
}

export default Booking;