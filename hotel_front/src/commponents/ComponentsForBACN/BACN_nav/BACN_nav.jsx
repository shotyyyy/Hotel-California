import React from "react";
import './bacn_nav.css'
import BACN_nav_cards from "../BACN_nav_cards/BACN_nav_cards";
import modern from '../../../img/Moscow_modern.png'
import basik from '../../../img/base.png'
import delux from '../../../img/delux.png'
import delux2 from '../../../img/delux2.png'
import delux3 from '../../../img/delux3.png'
import delux4 from '../../../img/delux4.png'
import delux5 from '../../../img/delux5.png'
import primer from '../../../img/ptimer.png'

const BACN_nav = () => {
  return (
    <div className="BACN_nav">
      <div className="BACN_nav_body">
        <div className="BACN_nav_choice">Выберите номер</div>
        <div className="BACN_nav_cards">
          <BACN_nav_cards img={modern}/>
          <BACN_nav_cards img={basik}/>
          <BACN_nav_cards img={delux}/>
          <BACN_nav_cards img={delux2}/>
          <BACN_nav_cards img={delux3}/>
          <BACN_nav_cards img={delux4}/>
          <BACN_nav_cards img={delux5}/>
          <BACN_nav_cards img={primer}/>
          <BACN_nav_cards img={modern}/>
        </div>
      </div>
    </div>
  )
}

export default BACN_nav