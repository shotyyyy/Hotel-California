import React from "react";
import "./bf_form.css";
import modern from "../../../img/delux.png";

const BF_form = (props) => {
  return (
    <div className="bf_form">
      <div className="bf_form_body">
        <div className="bf_form_img">
          <img src={props.img} alt="" />
        </div>
        <div className="bf_form_inputs">
          <div className="bf_form_input_title">
            <label htmlFor="adults">Ваше ФИО:</label>
            <input type="text" />
          </div>
          <div className="bf_form_input_desc">
            <div className="mail">
              <label htmlFor="adults">Почта:</label>
              <input type="text" />
            </div>
            <div className="phone">
              <label htmlFor="adults">Номер телефона:</label>
              <input type="text" />
            </div>
          </div>
          <div className="bf_form_input_desc2">
            <div className="adults">
              <label htmlFor="adults">Количество взрослых:</label>
              <input type="text" />
            </div>
            <div className="children">
              <label htmlFor="adults">Количество детей:</label>
              <input type="text" />
            </div>
          </div>
          <div className="bf_form_input_desc3">
            <div className="check-in">
              <label htmlFor="adults">Дата заезда:</label>
              <input type="text" />
            </div>
            <div className="departure">
              <label htmlFor="adults">Дата выезда:</label>
              <input type="text" />
            </div>
          </div>
          <div className="bf_form_button">
          <button>ЗАБРОНИРОВАТЬ</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BF_form;
