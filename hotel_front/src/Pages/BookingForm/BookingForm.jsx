import React from "react";
import Header from "../../commponents/Header/Header";
import BookText from "../../commponents/ComponentsForBookingFields/bookText/BookText";
import Footer from "../../commponents/Footer/Footer";

function BookingForm() {
    return (
        <div>
            <Header />
            <BookText />
            <Footer />
        </div>
    );
}

export default BookingForm;