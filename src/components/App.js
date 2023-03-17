import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login/Login";

import Master from "./Flight/Flight";
import MasterHotel from "./Hotel/Hotel";
import Modals from "./CheckOut/Checkout";
import MasterTrain from "./Train/MasterTrain";

const App = () => {
  const [modal2Open, setModal2Open] = useState(true);
  return (
    <BrowserRouter>
      <div id='main'>
        <Routes>
          <Route
            path='/Master'
            element={
              <Master modal2Open={modal2Open} setModal2Open={setModal2Open} />
            }
          />
          <Route path='/' element={<Login />} />
          <Route
            path='/checkout'
            element={
              <Modals modal2Open={modal2Open} setModal2Open={setModal2Open} />
            }
          />
          <Route
            path='/hotels'
            element={
              <MasterHotel
                modal2Open={modal2Open}
                setModal2Open={setModal2Open}
              />
            }
          />
        <Route path='/trains' element={<MasterTrain />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <MasterHotel />
  );
};

export default App;