import React from "react";
import './filters.css'

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters_body">
        <div className="filters_text">
          <ul>
            <li>ФИЛЬТРЫ</li>
            <li className="type">ТИП НОМЕРА:</li>
          </ul>
        </div>
        <div className="filters_buttons1">
        <button className="button1">ПРЕЗИДЕНТСКИЙ</button>
        <button className="button2">ДЕЛЮКС</button>
        <button className="button3">ЛЮКС</button>
        </div>
        <div className="filters_buttons2">
        <button className="button4">ОДИНОЧНЫЙ</button>
        <button className="button5">ДЛЯ ПАР</button>
        <button className="button6">СЕМЕЙНЫЙ</button>
        </div>
      </div> 
    </div>
  )
}

export default Filters