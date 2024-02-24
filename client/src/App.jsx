import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Bookings from "./pages/Bookings";
import Page404 from "./pages/Page404";


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
       
      <img src="./src/assets/BTS_Images/dognose.webp" width="30" height="24"/>
   
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <img src="./src/assets/BTS_Images/doghouse.webp" width="30" height="24"/>
              <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
              <img src="./src/assets/BTS_Images/dogbook.webp" width="30" height="24"/>
              <Link to="/registration">To Register</Link>
              </li>
              <li className="nav-item">
              <img src="./src/assets/BTS_Images/dogwalk.webp" width="30" height="24"/>
              <Link to="/bookings">To Book</Link>
              </li>
            </ul>
          </div>
      </nav>
    
      <div className="container md">
        <img src="./src/assets/BTS_Images/istockphoto-814928228-2048x2048.jpg" className="img-fluid" alt="Boop the Snoot" />
        <h1>Boop the Snoot</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
