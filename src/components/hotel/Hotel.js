import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import HotelSearch from "./HotelSearch";
import HSearchRes from "./HSearchRes";
import { Hotel_api } from "../Fetchs/fetch";

const MasterHotel = ({ modal2Open, setModal2Open }) => {
  const [from, setfrom] = useState("");
  const [depart, setDepart] = useState("");
  const [type, setType] = useState("");
  const [arrival, setArrival] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const getData = async () => {
    await fetch(
      Hotel_api
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredHotels(data);
        setHotels(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <HotelSearch
        from={from}
        setfrom={setfrom}
        depart={depart}
        setDepart={setDepart}
        arrival={arrival}
        setArrival={setArrival}
        type={type}
        setType={setType}
        HotelsProps={hotels}
        setFilteredHotels={setFilteredHotels}
      />

      <HSearchRes
        from={from}
        hotels={hotels}
        setHotels={setHotels}
        filteredHotels={filteredHotels}
        setFilteredHotels={setFilteredHotels}
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
      />
    </div>
  );
};

export default MasterHotel;