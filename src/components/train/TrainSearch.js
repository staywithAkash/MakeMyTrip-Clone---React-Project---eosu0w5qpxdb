import React, { useState, useEffect } from "react";
import "./train.css";

const TrainSearch = ({
  from,
  setfrom,
  to,
  setTo,
  depart,
  setDepart,

  TrainProps,
  setFilteredTrains,
}) => {
  const [trains, setTrains] = useState([]);

  const [trainOption, setTrainOption] = useState([]);
  const [trainOption2, setTrainOption2] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
      );
      const data = await response.json();
      const dataOne = new Set();
      const data2 = new Set();
      data.forEach(element => {
          dataOne.add(element.from);
      });
      data.forEach(element => {
          data2.add(element.to);
      });
      setTrainOption(dataOne);
      setTrainOption2(data2);
      setTrains(data);
      console.log(dataOne);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...TrainProps];
    let result = data.filter((data) => data.from == from && data.to == to);
    setFilteredTrains(result);
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
                    <option value='' disabled>
                      Select City
                    </option>
                    {[...trainOption].map((form, index) => (
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
                    <option value='' disabled>
                      Select City
                    </option>
                    {[...trainOption2].map((to, index) => (
                      <option key={index} value={to}>
                        {to}
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
            </div>
            <div className='container d-flex justify-content-center position-relative search-btn'>
              <button type='submit' className='Click_Me'>
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TrainSearch;