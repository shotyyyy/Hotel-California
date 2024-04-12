import React from "react";
import { Link } from "react-router-dom";
import style from './bacn_nav_cards.module.css'

const BACN_nav_cards = (props) => {
  return (
    <div className={style.BACN_nav_cards}>
          <div className={style.BACN_nav_cards_img}>
            <img src={props.img} alt="" />
            <Link to='/BookingForm'>
            <button>выбрать</button>
            </Link>
            
          </div>
    </div>
  )
}

export default BACN_nav_cards