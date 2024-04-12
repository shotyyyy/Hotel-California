import React from "react";
import Footer from "../../commponents/Footer/Footer";
import Header from "../../commponents/Header/Header";
import BookText from "../../commponents/ComponentsForBookingFields/bookText/BookText";
import Navigate from "../../commponents/ComponentsForBACN/Navigate/Navigate";
import BACN_nav from "../../commponents/ComponentsForBACN/BACN_nav/BACN_nav";


function BookingAndChooseNum() {
    return(
        <div>
            <Header />
            <BookText />
            <Navigate />
            <BACN_nav />
            <Footer />
        </div>
    );
}

export default BookingAndChooseNum;