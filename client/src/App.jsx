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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <img src="./src/assets/BTS_Images/dognose.webp" width="30" height="24" alt="Logo" />
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
                  <img src="./src/assets/BTS_Images/doghouse.webp" width="30" height="24" alt="Icon" />
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <div className="d-flex flex-column align-items-center">
                  <img src="./src/assets/BTS_Images/dogbook.webp" width="30" height="24" alt="Icon" />
                  <Link className="nav-link" to="/registration">
                    To Register
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <div className="d-flex flex-column align-items-center">
                  <img src="./src/assets/BTS_Images/dogwalk.webp" width="30" height="24" alt="Icon" />
                  <Link className="nav-link" to="/bookings">
                    To Book
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div style={{ backgroundColor: "white" }}>
        <section className="bg-white text-dark p-8 text-center">
          <div className="container" style={{ maxWidth: "80%" }}>
            <div className="d-sm-flex align-items-center">
              <img
                src="./src/assets/BTS_Images/istockphoto-814928228-2048x2048.jpg"
                style={{ width: "50%", height: "150" }}
                alt="Boop the Snoot"
                className="float-left"
              />
              <div className="flex-grow-1 text-left pl-5">
                <h2>text goes here</h2>
              </div>
            </div>
          </div>
        </section>
      </div>




      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
