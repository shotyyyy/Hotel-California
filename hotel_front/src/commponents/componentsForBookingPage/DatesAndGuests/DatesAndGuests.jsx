import React from "react";
import './datesAndGuests.css'

const DatesAndGuests = () => {
    return (
        <div className="dates-and-guests">
            <div className="rectangle-dag">
                <div className="guets">
                    <input type="number" name="guests-num" id="" className="guest"/>
                </div>
                <div className="dates">
                    <input type="date" name="check-in-dates" id="" className="date"/>
                </div>
                <div className="line-dag"></div>
            </div>
        </div>
    );
}

export default DatesAndGuests;