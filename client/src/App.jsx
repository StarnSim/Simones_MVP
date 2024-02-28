import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Bookings from "./pages/Bookings";
import Page404 from "./pages/Page404";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <img
            src="./src/assets/BTS_Images/dog-nose-white.png"
            width="30"
            height="24"
            alt="Logo"
          />
          <a className="navbar-brand">Boop the Snoot</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="./src/assets/BTS_Images/doghouse_white.png"
                      width="30"
                      height="24"
                      alt="Icon"
                    />
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="./src/assets/BTS_Images/dogbook_white.png"
                      width="30"
                      height="24"
                      alt="Icon"
                    />
                    <Link className="nav-link" to="/registration">
                      Register your Dog
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="./src/assets/BTS_Images/dogwalk-white.png"
                      width="30"
                      height="24"
                      alt="Icon"
                    />
                    <Link className="nav-link" to="/bookings">
                      Create a Booking
                    </Link>
                  </div>
                </li>


                <li className="nav-item">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="./src/assets/BTS_Images/cal_white.png"
                      width="30"
                      height="24"
                      alt="Icon"
                    />
                    <Link className="nav-link" to="/schedule">
                      Schedule
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    
    </>
  );
}

export default App;
