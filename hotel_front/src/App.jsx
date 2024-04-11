// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RoomsPrices from "./Pages/RoomsPrices/RoomsPrices";
import BookingField from "./Pages/BookingField/BookingField";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RoomsPrices" element={<RoomsPrices />} />
          <Route path="/BookingField" element={<BookingField />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
