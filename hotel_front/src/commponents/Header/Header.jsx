import React from "react";
import "./header.css";
import adress from "../../img/img_header/wired-outline-18-location-pin (1) 1.svg";
import logo from "../../img/img_header/Untitled_logo_1_free-file-Photoroom 1.svg";
import phone from "../../img/img_header/system-regular-58-call-phone (1) 1.svg";
import instagram from "../../img/img_header/free-icon-instagram-2111463 1.svg";
import telegram from "../../img/img_header/free-icon-telegram-2111646 1.svg";
import bg from "../../img/img_header/icons8-hamburger-menu.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_burger-btn">
            <img className="burger" src={bg} alt="" />
            МЕНЮ
          </div>
          <div className="header_stryt">
            Театральный пр., 2
            <img className="location" src={adress} alt="" />
          </div>
          <div className="header_logo">
            <img src={logo} alt="" />
          </div>
          <div className="header_number">
            <img className="phone" src={phone} alt="" />
            +7 985-463-40-99
          </div>
          <div className="header_icons">
            <img className="insta" src={instagram} alt="" />
            <img src={telegram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
