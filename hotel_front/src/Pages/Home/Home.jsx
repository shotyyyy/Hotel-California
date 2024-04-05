import React from "react";
import Header from "../../commponents/Header/Header";
import City from "../../commponents/City/City";
import Rooms from "../../commponents/Rooms/Rooms";
import InMoscow from "../../commponents/InMoscow/InMoscow";
import Bars from "../../commponents/Bars/Bars";
import Events from "../../commponents/Events/Events";
import Map from "../../commponents/Map/Map";
import Footer from "../../commponents/Footer/Footer";

function Home() {
  return (
    <div className="wrapper">
      
      <City />
      <Rooms />
      <InMoscow />
      <Bars />
      <Events />
      <Map />
      
    </div>
  );
}

export default Home;