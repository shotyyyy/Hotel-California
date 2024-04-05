// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RoomsPrices from "./Pages/RoomsPrices/RoomsPrices";
import Header from "./commponents/Header/Header";
import Footer from "./commponents/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RoomsPrices" element={<RoomsPrices />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
