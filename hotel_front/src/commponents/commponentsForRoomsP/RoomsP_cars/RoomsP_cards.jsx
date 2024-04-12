import React from "react";
import styles from "./roomsP_cards.module.css";
import { Link } from "react-router-dom";

const RoomsP_cards = (props) => {
  return (
    <div className={styles.roomsP_cards}>
      <div className={styles.roomsP_cards_body}>
        <div className={styles.roomsP_cards_img}>
          <img src={props.img} alt="" />
        </div>
        <div className={styles.roomsP_text}>
          <div className={styles.roomsP_cards_title}>{props.title}</div>
          <div className={styles.roomsP_cards_desc}>{props.desc}</div>
          <div className={styles.roomsP_cards_metrs}>{props.metrs}</div>
          <div className={styles.roomsP_cards_buttons}>
            <div className={styles.roomsP_cards_btn}>
              <Link to='/BookingField'>
                <button>Забронировать</button>
              </Link>
            </div>
            <div className={styles.roomsP_cards_sells}>
              <p>{props.sells}</p>
            </div>
          </div>
          <div className={styles.roomsP_cards_dsc}>
            <div className={styles.roomsP_cards_type}>{props.type}</div>
            <div className={styles.roomsP_cards_sells_desc}>Цена за ночь</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsP_cards;
