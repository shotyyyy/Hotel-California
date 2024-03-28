import React from "react";
import "./bars.css";
import bars from "../../img/bar.png";

const Bars = () => {
  return (
    <div className="bars">
      <div className="container">
        <div className="bars_body">
          <div className="bars_text">
            <div className="bars_title">РЕСТОРАНЫ И БАРЫ</div>
            <div className="bars_desc">
              Отдыхайте вкусно! Знакомьтесь с современной<br></br> европейской
              кухней и пробуйте авторские котейли
            </div>
            <div className="bars_name">
              <div className="border1"></div>
              <div>California Bar</div>
              <div className="border2"></div>
              <div>Bluemarine lounge</div>
              <div className="border3"></div>
              <div>!Barum</div>
            </div>
          </div>
          <div className="bars_img">
            <img src={bars} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bars;
