import React from "react";
import Header from "../../commponents/Header/Header";
import Footer from "../../commponents/Footer/Footer";
import Filters from "../../commponents/commponentsForRoomsP/Filters/Filters";
import Text from "../../commponents/commponentsForRoomsP/TextForRoomsP/Text";
import Block from "../../commponents/commponentsForRoomsP/TextForRoomsP/block";
import RoomsP from "../../commponents/commponentsForRoomsP/RoomsP/RoomsP";

function RoomsPrices() {
  return (
    <div className="wrapper">
      <Header />
      <Filters />
      <Text/>
      <Block/>
      <RoomsP/>
      <Footer />
    </div>
  );
}

export default RoomsPrices;
