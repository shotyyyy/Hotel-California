import React from "react";
import "./inMoscow.css";
import fhod from "../../img/фото отеля (вход).png";

const InMoscow = () => {
  return (
    <div className="inMoscow">
      
        <div className="inMoscow_body">
          
          <div className="inMoscow_title">
            <div className="border-right"></div>
            <span className="inMoscow_text">ОТЕЛЬ CALIFORNIA В МОСКВЕ</span>
          </div>
          <div className="inMoscow_desc">
            <img className="fhod" src={fhod} alt="" />
            <span>Отель California, расположенный на исторической улице Москвы -
            Театральный проспект, воплощает в себе величие и изысканность.
            Открывая двери этого замечательного заведения, гость погружается в
            атмосферу благородства и роскоши. Каждая деталь интерьера наполнена
            неповторимым шармом и изысканностью, призванными создать идеальные
            условия для отдыха и проведения времени в сердце столичной суеты.</span>
          </div>
        </div>
      
    </div>
  );
};

export default InMoscow;
