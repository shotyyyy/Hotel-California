import React from "react";
import Header from "../../commponents/Header/Header";
import BookText from "../../commponents/ComponentsForBookingFields/bookText/BookText";
import Footer from "../../commponents/Footer/Footer";
import BF_form from "../../commponents/CommponentsForBF/BF_form/BF_form";

function BookingForm() {
    return (
        <div>
            <Header />
            <BookText />
            <BF_form />
            <Footer />
        </div>
    );
}

export default BookingForm;