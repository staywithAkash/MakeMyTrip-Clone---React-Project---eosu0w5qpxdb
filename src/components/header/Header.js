import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo/mmt.jpg";
import "./header.css";

const Header = () => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMailId(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const navigate = useNavigate();
  const name = localStorage.getItem("emails");
  return (
    <nav className='navbar'>
      <div className='container'>
        <a className='navbar' href='/'>
          <img src={logo} alt='logo' width='120' height='40' className='logo' />
        </a>
        <div className='navLinks'>
          <ul>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/Master")}
              >
                FLIGHTS
              </button>
            </li>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/hotels")}
              >
                HOTELS
              </button>
            </li>
            <li>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => navigate("/trains")}
              >
                TRAINS
              </button>
            </li>
            <li>
              <div className='dropdown ms-2'>
                <button
                  className='btn btn-primary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  User name
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <li>
                    <a className='dropdown-item' href='.'>
                      Hello {name}
                    </a>
                  </li>

                  <li>
                    <a
                      className='dropdown-item'
                      href='.'
                      onClick={() => navigate("/")}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;