import React from "react";
import { Link } from "react-router-dom";
import './dateAndGuests.css'

const DateAndguests = () => {
    return (
    <div className="main-container">
      <div className="line"></div>
      <div className="input-group">
        <label htmlFor="arrivalDate">Дата заезда:</label>
        <input type="date" id="arrivalDate" name="arrivalDate" />
      </div>
      <div className="input-group">
        <label htmlFor="departureDate">Дата выезда:</label>
        <input type="date" id="departureDate" name="departureDate" />
      </div>
      <div className="line"></div>
      <div className="guests">
        <p>Количество человек:</p>
        <div className="input-group">
          <label htmlFor="adults">Взрослые:</label>
          <input type="number" id="adults" name="adults" />
        </div>
        <div className="input-group">
          <label htmlFor="children">Дети:</label>
          <input type="number" id="children" name="children" />
        </div>
      </div>
      <div className="line"></div>
      <div className="button-group">
        <Link to="/BookingAndCN">
          <button>Назад</button>
        </Link>

      </div>
    </div>
    );
}

export default DateAndguests