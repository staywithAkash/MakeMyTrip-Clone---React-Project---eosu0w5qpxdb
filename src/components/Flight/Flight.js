import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { flight_api } from "../Fetchs/Fetchs";
import FlightSearch from "./FlightSearch";
import SearchResult from "./SearchResult";

const Master = () => {
  const [from, setfrom] = useState("");
  
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [arrival, setArrival] = useState([]);
  const [flights, setFlights] = useState([]);
  const [filteredflights, setFilteredFlights] = useState([]); 
  const getData = async () => {
    await fetch(
      flight_api
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredFlights(data);
        setFlights(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <FlightSearch
        from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        depart={depart}
        setDepart={setDepart}
        arrival={arrival}
        setArrival={setArrival}
        flightsProps={flights}
        setFilteredFlights={setFilteredFlights}
      />

      <SearchResult
        from={from}
        to={to}
        depart={depart}
        arrival={arrival}
        flights={flights}
        setFlights={setFlights}
        filteredflights={filteredflights}
        setFilteredFlights={setFilteredFlights}
      />
    </div>
  );
};

export default Master;