import React, {useState} from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import './navigate.css'

//дата календарь
const DateField = ({ startDate: initialStartDate, endDate: initialEndDate }) => {
  const [startDate, setStartDate] = useState(new Date(initialStartDate));
  const [endDate, setEndDate] = useState(new Date(initialEndDate));

  const handleStartDateChange = (date) => {
    if (date <= endDate && getDaysDifference(date, endDate) <= 7) {
      setStartDate(date);
    } else {
      alert("Дата заезда не может быть позже даты выезда и разница между ними должна быть не более 7 дней!");
    }
  }

  const handleEndDateChange = (date) => {
    if (date >= startDate && getDaysDifference(startDate, date) <= 7) {
      setEndDate(date);
    } else {
      alert("Дата выезда не может быть раньше даты заезда и разница между ними должна быть не более 7 дней!");
    }
  }

  const getDaysDifference = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
  }

  return (
    <div className="date-field">
      <label className="date-label">Заезд - Выезд</label>
      <div className="date-picker-wrapper">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          dateFormat="dd MMMM"
        />
        {" - "}
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsEnd
          dateFormat="dd MMMM"
          minDate={startDate}
        />
      </div>
    </div>
  );
}

//кол во гостей
const GuestSelect = () => {
  const [guests, setGuests] = useState(1);

  const handleGuestChange = (e) => {
    setGuests(parseInt(e.target.value));
  }

  return (
    <div className="guest-select">
      <label htmlFor="guests">Кол-во гостей</label>
      <div className="guest-select-container">
        <select id="guests" value={guests} onChange={handleGuestChange}>
          {[...Array(5).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

const Navigate = () => {
  return (
    <div className="navigate">
      <div className="navigate_body">
        <div className="navigate_calendar">
          <DateField startDate="2024-04-13" endDate="2024-04-14"  className="date_field"/>
          {/* <input type="text" /> */}
        </div>
        <div className="navigate_guests">
          {/* <input type="text" /> */}
          <GuestSelect className="guests_field" />
        </div>
      </div>
    </div>
  )
}

export default Navigate