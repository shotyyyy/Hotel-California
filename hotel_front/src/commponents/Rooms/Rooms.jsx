import React from "react";
import "./rooms.css";
import { Link } from "react-router-dom";
import delucs from "../../img/rooms/Номер _делюкс_.png";
import buisnes from "../../img/rooms/Номер _пример_.png";
import base from "../../img/rooms/Номер _базовый_.png";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="container">
        <div className="rooms_body">
          <div className="rooms_img">
            <img src={delucs} alt="" />
            <img src={buisnes} alt="" />
            <img src={base} alt="" />
          </div>
          <div className="border"></div>
          <div className="rooms_more">
          <Link to='/RoomsPrices'>
          посмотреть все номера
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
