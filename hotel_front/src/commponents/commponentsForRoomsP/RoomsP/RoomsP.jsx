import React from "react";
import { useState } from "react";
import './roomsP.css'
import RoomsP_cards from "../RoomsP_cars/RoomsP_cards";
import modern from '../../../img/Moscow_modern.png'
import basik from '../../../img/base.png'
import delux from '../../../img/delux.png'
import delux2 from '../../../img/delux2.png'
import delux3 from '../../../img/delux3.png'
import delux4 from '../../../img/delux4.png'
import delux5 from '../../../img/delux5.png'
import primer from '../../../img/ptimer.png'

const RoomsP = ({ selectedType }) => {
  return (
    <div className="roomsP">
      <div className="roomsP_cards">
        <RoomsP_cards img={modern} title={'Номер «Московский модерн»'} desc={'Самые большие и тихие номера в Москве с просторными ванными комнатами, отделанными мрамором, и отдельными гардеробными.'} metrs={'Площадь номера: от 40 до 60 кв.м.'} sells={'10000р'} type={'Тип номера: Одиночный'}/>
        <RoomsP_cards img={basik} title={'Номер «Свежий взгляд»'} desc={'Интерьер номера с открытым пространством позволит вам с комфортом посвятить время работе и отдыху и любоваться знаменитыми достопримечательностями Москвы.'} metrs={'Площадь номера: от 44 до 55 кв.м.'} sells={'15000р'} type={'Тип номера: Семейный'}/>
        <RoomsP_cards img={primer} title={'Номер «Просторный кайф»'} desc={'Расположитесь с комфортом в уютной гостиной или выйдите на балкон, чтобы насладиться незабываемыми видами.'} metrs={'Площадь номера: от 63 до 85 кв.м.'} sells={'17000р'} type={'Тип номера: Для пар'}/>
        <RoomsP_cards img={delux} title={'Номер «Мечта»'} desc={'Люкс с видом на разноцветные купола храма Василия Блаженного и другие достопримечательности российской столицы — мечта любого путешественника!'} metrs={'Площадь номера: 158 кв.м.'} sells={'23000р'} type={'Тип номера: Люкс'}/>
        <RoomsP_cards img={delux2} title={'Номер «Престиж»'} desc={'Эти угловые люксы с просторными жилой и обеденной зонами и панорамными окнами, откуда открываются лучшие в городе виды, идеально подходят для деловых поездок и семейного отдыха.'} metrs={'Площадь номера: от 117 до 118 кв.м.'} sells={'27000р'} type={'Тип номера: Люкс'}/>
        <RoomsP_cards img={delux3} title={'Номер «Что-то на богатом»'} desc={'Устраивайте встречи в гостиной, приглашайте гостей на ужин и любуйтесь легендарными видами Москвы в элегантных люксах, идеально подходящих для продолжительного пребывания.'} metrs={'Площадь номера: от 166 до 198 кв.м.'} sells={'35000р'} type={'Тип номера: Делюкс'}/>
        <RoomsP_cards img={delux4} title={'Номер «Золотая лихорадка»'} desc={'Нелегко устоять перед искушением поселиться в одном из этих просторных люксов с гостиной, оформленной в стиле лаунж-зоны.'} metrs={'Площадь номера: 328 кв.м.'} sells={'45000р'} type={'Тип номера: Президентский'}/>
        <RoomsP_cards img={delux5} title={'Номер «Арабская ночь»'} desc={'Поднимите бокал, наслаждаясь впечатляющими видами Красной площади и Кремля на просторной террасе, или поужинайте в обеденном зале.'} metrs={'Площадь номера: 380 кв.м.'} sells={'50000р'} type={'Тип номера: Президентский'}/>
      </div>
    </div>
  )
}

export default RoomsP