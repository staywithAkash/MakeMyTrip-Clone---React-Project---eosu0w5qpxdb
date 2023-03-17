import React, { useState, useEffect,useRef } from "react";
import {flight_api}  from "../Fetchs/fetch";
import "./flight.css";

const FlightSearch = ({
  from,
  setfrom,
  to,
  setTo,
  depart,
  setDepart,
  arrival,
  setArrival,
  flightsProps,
  setFilteredFlights,
}) => {
  console.log('Depart',depart);
  const [flights, setFlights] = useState([]);

  const [flightOption, setFlightOption] = useState([]);
  const [flightOption2,setFlightOption2] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        flight_api
      );
      const data = await response.json();
      const data1 =new Set();
      data.forEach(element => {
        data1.add(element.from);
      });
      const data2 = new Set();
      data.forEach(element=>{
        data2.add(element.to);
      })
      setFlightOption(data1);
      setFlightOption2(data2)
      console.log(data1);
      setFlights(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...flightsProps];
    if(from=='' || to=='' || depart=='' || arrival==''){
      alert("Please select options ");
    }
    else{
    let result = data.filter((data) => data.from == from && data.to == to && data.departure.departureDate == depart && data.return.returnDate == arrival);
    setFilteredFlights(result);
  }
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
    // console.log(event.target.value);
  };
  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDepartureChange = (event) => {
    
    setDepart(event.target.value);
  };

  const handleReturnChange = (event) => {
    setArrival(event.target.value);
  };

  return (
    <>
      <div className='flight-search-section'>
        <div className='container  bg-light  rounded-3 px-5 '>
          <form
            onSubmit={handleSubmit}
            className='pb-5 pt-3'
            style={{ width: "100%", marginLeft: "100px" }}
          >
            <div className='row g-2'>
              <div className='col-md'>
                <div className='form-floating'>
                  <select
                    className='form-select'
                    id='floatingSelectGrid'
                    aria-label='Floating label select example'
                    defaultValue='1'
                    onChange={handleFromChange}
                  >
                    <option value='' disabled selected>
                      Select City
                    </option>
                    {[...flightOption].map((form, index) => (
                      <option key={index} value={form}>
                        {form}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>FROM</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <select
                    className='form-select'
                    id='floatingSelectGrid'
                    aria-label='Floating label select example'
                    defaultValue='2'
                    onChange={handleToChange}
                  >
                    <option value='' selected disabled>
                      Select City
                    </option>
                    {[...flightOption2].map((form, index) => (
                      <option key={index} value={form}>
                        {form}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>TO</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    className='form-control'
                    onChange={handleDepartureChange}
                  />
                  <label htmlFor='floatingSelectGrid'>Departure Date</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    min={depart}
                    className='form-control'
                    onChange={handleReturnChange}
                  />
                  <label htmlFor='floatingSelectGrid'>Return Date</label>
                </div>
              </div>
            </div>
            <div className='container d-flex justify-content-center position-relative search-btn'>
              <button type='submit' className='btn_search'>
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
