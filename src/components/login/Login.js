import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  let flag;
  // const element.getEmail = localStorage.getItem("username");
  // const getPaselement.password = localStorage.getItem("passwords");
  let getcredentials = localStorage.getItem('credentials');
  getcredentials = JSON.parse(getcredentials);
  let credentials = [];
  
  
  const handleSubmit = () => {
    event.preventDefault();
    if (email.current.value !== "" && password.current.value !== "") {
      console.log(email.current.value);
      const credential = {
        username : email.current.value,
        password : password.current.value,
      };
      credentials.push(credential);
      console.log('typee',typeof credentials);
      // localStorage.setItem("emails", email.current.value);
      // localStorage.setItem("passwords", password.current.value);
      localStorage.setItem('credentials',JSON.stringify(credentials));
      alert(`Successfully register ${email.current.value}`);

    }
  }
  const handleClick = () => {
      flag = false;
      let getcredentials = localStorage.getItem('credentials');
      getcredentials = JSON.parse(getcredentials);

      if (email.current.value == "" && password.current.value == "") {
        alert("Please enter email and password");
      }
      else if (!email.current.value) {
        alert("Please enter email");
      }
      else if (!password.current.value) {
        alert("Please enter password");
      }
      else if (password.current.value.length < 6) {
        alert("Please enter 6 digit password");
      }
      else{
      getcredentials.forEach(element => {
        console.log('usr',element.username,'pass',element.password);
        if (email.current.value == element.username && password.current.value == element.password) 
        {
          navigate("/Master");
          alert("Loging successfully");
          flag= true;
        }
      });
      if(flag===false){
      alert("Incorrect email or password");
      }
    } 
  }
  return (
      <div className="Login">
        <form className="containerlog" onSubmit={handleSubmit}>
          <h3>Sign-In</h3>
            <input type="text" ref={email}  id="name" required placeholder="Enter Your Email"/>
            <input type="password" ref={password} id="pass" minLength="6"  required placeholder="Password"/> 
          <button id="rgs_btn" >Sign-Up</button>
          <button id="lgn_btn" type="button" onClick={handleClick}>Login</button>
        </form>
      </div>
  );
};

export default Login;