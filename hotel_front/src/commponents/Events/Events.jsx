import React from "react";
import "./evens.css";
import event from "../../img/events.png";

const Events = () => {
  return (
    <div className="events">
      <div className="container">
        <div className="events_body">
          <div className="events_img">
            <img src={event} alt="" />
          </div>
          <div className="events_text">
            <div className="events_title">МЕРОПРИЯТИЯ</div>
            <div className="events_desc">
              Проводите время в уютной праздничной атмосфере. Множество
              мероприятий проходят в самом сердце столицы, в California Hotel.
              Все крупные праздники проводятся с шикарными декорациями и
              музыкальными выступлениями!{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
