import React, { useState, useEffect } from "react";
import { Hotel_api } from "../Fetchs/Fetchs";
import "./hotel.css";

const HotelSearch = ({
  from,
  setfrom,
  depart,
  setDepart,
  arrival,
  setArrival,
  type,
  setType,
  HotelsProps,
  setFilteredHotels,
}) => {
  console.log('type',type,'depart',depart,'arrival',arrival,'from',from);
  const [hotels, setHotels] = useState([]);

  const [hotelOption, setHotelOption] = useState([]);
  const [hotelOption2, setHotelOption2] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        Hotel_api
      );
      const data = await response.json();
      const dataOne = new Set();
      const data2 = new Set();
      data.forEach(element => {
         dataOne.add(element.city); 
      });
      data.forEach(element =>{
        data2.add(element.room_type)
      })
      setHotelOption(dataOne);
      setHotelOption2(data2);
      setHotels(data);
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...HotelsProps];
    if(from=="" || depart=="" || arrival=="" || type==""){
      alert("Please select option");
    }
    else{
    let result = data.filter((data) => data.city == from && data.check_in == depart && data.check_out == arrival && data.room_type == type);
    setFilteredHotels(result);
    }
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
  };
  const handleToChange = (event) => {
    setType(event.target.value);
  };

  const handleReturnChange =(event)=>{
    setArrival(event.target.value);
  }

  const handleDepartureChange = (event) => {
    setDepart(event.target.value);
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
                    {[...hotelOption].map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>CITY </label>
                </div>
              </div>

              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    className='form-control'
                    onChange={handleDepartureChange}
                  />
                  <label htmlFor='floatingSelectGrid'>CHECK-IN</label>
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
                  <label htmlFor='floatingSelectGrid'>CHECK-OUT</label>
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
                      Select Type
                    </option>
                    {[...hotelOption2].map((room_type, index) => (
                      <option key={index} value={room_type}>
                        {room_type}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>CLASS</label>
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

export default HotelSearch;