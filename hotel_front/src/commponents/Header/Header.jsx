import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import Menu from "../Menu/Menu";
import adress from "../../img/img_header/wired-outline-18-location-pin (1) 1.svg";
import logo from "../../img/img_header/Untitled_logo_1_free-file-Photoroom 1.svg";
import phone from "../../img/img_header/system-regular-58-call-phone (1) 1.svg";
import instagram from "../../img/img_header/free-icon-instagram-2111463 1.svg";
import telegram from "../../img/img_header/free-icon-telegram-2111646 1.svg";
import bg from "../../img/img_header/icons8-hamburger-menu.svg";

const Header = () => {
  const handleScrollToMap = () => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    {
      value: "ГЛАВНАЯ",
      path: "/",
    },
    { value: "НОМЕРА И ЦЕНЫ", path: "/RoomsPrices" },
    { value: "БРОНИРОВАНИЕ", path: "/Booking" },
    { value: "ЛИЧНЫЙ КАБИНЕТ", href: "#!" },
  ];
  useEffect(() => {
    // Функция для блокировки/разблокировки прокрутки
    const toggleScrollLock = () => {
      document.documentElement.classList.toggle("scroll-lock", menuActive);
    };

    toggleScrollLock(); // Вызываем функцию при монтировании компонента

    return () => {
      // Очищаем эффект при размонтировании компонента
      toggleScrollLock(); // Убираем блокировку прокрутки при размонтировании компонента
    };
  }, [menuActive]);
  return (
    <div className="header">
      <div className="header_row">
        <div
          className="header_burger-btn"
          onClick={() => setMenuActive(!menuActive)}
        >
          <img className="burger" src={bg} alt="" />
          <span className="menutxt">МЕНЮ</span>
        </div>
        <div className="header_stryt" onClick={handleScrollToMap}>
          <span className="addresstxt">Театральный пр-т, 2</span>
          <img className="location" src={adress} alt="" />
        </div>
        <div className="header_logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="header_number">
          <img className="phone" src={phone} alt="" />
          +7 985-463-40-99
        </div>
        <div className="header_icons">
          <a href="https://yandex.ru/images/search?img_url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2017%2F05%2F04%2F2282965%2Ffotorcreated.jpg&lr=213&pos=2&rpt=simage&source=serp&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D0%B7%D0%B0%D0%BF%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BE%20%D0%B2%20%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8">
            <img className="insta" src={instagram} alt="" />
          </a>
          <a href="https://web.telegram.org/a/#280851800">
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
    </div>
  );
};

export default Header;
