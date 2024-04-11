import React from "react";
import './dateAndGuests.css'

const DateAndguests = () => {
    return (
        <div>
            <div className="black-block">
                <div className="white-line"></div>
            </div>
            <div className="input-fields">
                <div>
                    <p>Дата заезда:</p>
                    <input type="date" />
                </div>
                <div>
                    <p>Дата выезда:</p>
                    <input type="date" />
                </div>
                <div className="white-line"></div>
                <p>Количество человек:</p>
                <div>
                    <label>Взрослые:</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Дети:</label>
                    <input type="number" />
                </div>
                <div className="white-line"></div>
                <button>Найти</button>
            </div>
        </div>
    );
}

export default DateAndguests