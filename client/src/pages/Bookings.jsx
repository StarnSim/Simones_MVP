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
}

  return (
    <>
  <div className="container">To Book</div>
  <form onSubmit={handleSubmit} >
  <label>
  Select Dog
  <select
    name="dogId"
    value={bookingformData.dogId}
    onChange={handleChange}
  >
  <option value="">Select a dog</option>
  {registeredDogs.map((dog) => (
  <option key={dog.id} value={dog.id}>
    {dog.dogName}
  </option>
  ))}
  </select>
  </label>

  <label>
  Owner's Name
  <input 
    className="form-control"
    type="text"
    name="ownerName"
    value={bookingformData.ownerName}
    onChange={handleChange}
    placeholder="OwnersName"
    /> 
</label>

<label>
  email
  <input 
    className="form-control"
    type="text"
    name="email"
    value={bookingformData.email}
    onChange={handleChange}
    placeholder="email"
    /> 
</label>

<label>
  Address
  <input 
    className="form-control"
    type="text"
    name="address"
    value={bookingformData.address}
    onChange={handleChange}
    placeholder="address"
    /> 
</label>


<label>
  Booking Date
  <DatePicker
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

<label>
  Booking Time
  <select
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


<button type="submit"
   className="btn btn-primary">
 <i className="fa-solid fa-paw"></i><br/>
  Book the Snoot
  </button>
  {bookingMessage && <div>{bookingMessage}</div>}
  </form>
  </>
  );
}





// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { useEffect, useState } from "react";


// export default function Bookings() { 
//   const [bookingformData, setBookingFormData] = useState({
//   dogName: "",
//   ownerName: "",
//   email: "",
//   address: "",
//   phoneNumber: "",
//   bookingTime: "",
//   bookingDate: null,
// });

// const [dogs, setDogs] = useState([]);

// useEffect(() => {
//   getDogs();
//   getBookings();
// }, []);

// const getDogs = () => {
//   fetch("/api/dogs")
//     .then((response) => response.json())
//     .then((dogs) => {
//       setDogs(dogs);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const [bookings, setBookings] = useState([]);

// const getBookings = () => {
//   fetch("/api/bookings")
//     .then((response) => response.json())
//     .then((bookings) => {
//       setBookings(bookings);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setBookingFormData({
//     ...bookingformData,
//     [name]: value,
//   });
// };

// async function handleSubmit(e) {
//   e.preventDefault();
//   try {
//     const response = await fetch("/api/bookings", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(bookingformData),
//     });

//     if (response.ok) {
//       console.log(`"${bookingformData.dogName}" is booked in on "${bookingformData.bookingDate}" for a "${bookingformData.bookingTime}"`);
//     } else {
//       console.error("Failed to book");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

