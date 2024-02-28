import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";


export default function Bookings() { 
  const [bookingformData, setBookingFormData] = useState({
  dogId: "",
  dogName: "",
  ownerName: "",
  email: "",
  address: "",
  phoneNumber: "",
  bookingTime: "",
  bookingDate: null,
});
const [bookings, setBookings] = useState([]);
const [bookingMessage, setBookingMessage] = useState(""); 
const [registeredDogs, setRegisteredDogs] = useState([]); // State to store registered dogs


useEffect(() => {
  getBookings();
  getRegisteredDogs(); // Fetch registered dogs when component mounts
}, []);

const getBookings = () => {
  fetch("/api/bookings")
    .then((response) => response.json())
    .then((bookings) => {
      setBookings(bookings);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getRegisteredDogs = () => {
  fetch("/api/dogs")
    .then((response) => response.json())
    .then((dogs) => {
      setRegisteredDogs(dogs);
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setBookingFormData({
    ...bookingformData,
    [name]: value,
  });
};

async function handleSubmit(event) {
  event.preventDefault();
  try {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingformData),
    });

    if (response.ok) {
      setBookingMessage(`Your Snoot is booked on "${bookingformData.bookingDate}" for "${bookingformData.bookingTime}"`
      );
     
    } else {
      setBookingMessage("Failed to book");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};



  return (
    <>
    <div className="container bg-light px-10 mb-5 d-flex flex-column align-items-center justify-content-center rounded">
    <form
          onSubmit={handleSubmit}
          className="py-3 bg-white rounded d-flex flex-column align-items-center"
          >

        <h1 className="display-1 position-absolute top-50 start-50 translate-middle text-center text-white animate-boop">
          Book Daycare
        </h1>
        <img
          src="./src/assets/BTS_Images/pexels-helena-lopes-3114143.jpg"
          style={{ height: "auto", width: "500" }}
          className="img-fluid"
        />
    

  
  <label className="col-4 form-label mt-4">
  <select
    className="form-control rounded"
    name="dogId"
    value={bookingformData.dogId}
    onChange={handleChange}
  >
  <option value="">Select your dog</option>
  {registeredDogs.map((dog) => (
  <option key={dog.id} value={dog.id}>
    {dog.dogName}
  </option>
  ))}
  </select>
  </label>

  <label className="col-4 form-label mt-4">
  
  <input 
    className="form-control rounded"
    type="text"
    name="ownerName"
    value={bookingformData.ownerName}
    onChange={handleChange}
    placeholder="OwnersName"
    /> 
</label>

<label className="col-4 form-label mt-4">
  
  <input 
    className="form-control rounded"
    type="text"
    name="email"
    value={bookingformData.email}
    onChange={handleChange}
    placeholder="email"
    /> 
</label>

<label className="col-4 form-label mt-4">
  
  <input 
    className="form-control rounded"
    type="text"
    name="address"
    value={bookingformData.address}
    onChange={handleChange}
    placeholder="Address"
    /> 
</label>


<label className="col-4 form-label mt-4">
  
  <DatePicker
  className="form-control rounded"
    selected={bookingformData.bookingDate}
    onChange={(date) =>
    setBookingFormData({
    ...bookingformData,
    bookingDate: date.toISOString().substring(0,10),
  })
    }
      placeholderText="Select a date"
  />
</label>

<label className="col-4 form-label mt-4">
  
  <select
  className="form-control rounded"
    name="bookingTime"
    value={bookingformData.bookingTime}
    onChange={handleChange}
    >
    <option value="">Select a time</option>
    <option value="Half Day - Morning">Half Day - Morning</option>
    <option value="Half Day - Afternoon">Half Day - Afternoon</option>
    <option value="Full Day">Full Day</option>
  </select>
</label>

<div className="mt-4 text-center">
<button type="submit"
   className="btn btn-success">
 <i className="fa-solid fa-paw"></i><br/>
 Boop to Submit
  </button>
  </div>
  {bookingMessage && <div>{bookingMessage}</div>}
  </form>
  </div>  
  </>
  );
}