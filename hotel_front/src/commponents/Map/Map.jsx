import React from "react";
import "./map.css";
import instagram from "../../img/img_header/free-icon-instagram-2111463 1.svg";
import telegram from "../../img/img_header/free-icon-telegram-2111646 1.svg";

const Map = () => {
  return (
    <div className="map" id="map">
      <div className="container">
        <div className="map_body">
          <div className="map_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.004888080296!2d37.619157676440985!3d55.75841729155915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5b0ae86ff9%3A0xb3c0cb2ae04ac628!2z0KLQtdCw0YLRgNCw0LvRjNC90YvQuSDQv9GALdC0LCAyLCDQnNC-0YHQutCy0LAsIDEwOTAxMg!5e0!3m2!1sru!2sru!4v1711563768250!5m2!1sru!2sru"
              width="600"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map_text">
            <div className="map_title">КОНТАКТЫ</div>
            <div className="map_desc">г. Москва Театральный пр., 2</div>
            <div className="map_number">+7 985-463-40-99</div>
            <div className="map_adres">CaliforniaHot@msc.com</div>
            <div className="map_icons">
              <img className="instagram" src={instagram} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
