import React, { useEffect, useState } from 'react';

const Schedule = () => {
  const [bookings, setBookings] = useState([]);
  const [registeredDogs, setRegisteredDogs] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchRegisteredDogs();
  }, []);

// fetch the bookings endpoint
  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings'); 
      const bookingsData = await response.json();
      setBookings(bookingsData);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
// fetch the dogs endpoint
  const fetchRegisteredDogs = async () => {
    try {
      const response = await fetch('/api/dogs'); 
      const dogsData = await response.json();
      setRegisteredDogs(dogsData);
    } catch (error) {
      console.error('Error fetching registered dogs:', error);
    }
  };
  
  return (
    <div className=" schedule-form container bg-light px-10 mb-5 d-flex flex-column align-items-center justify-content-center">
     <div>
      <h1 className="schedule-header">Schedule</h1>
      <ul className='schedule-list'>
            {bookings.map((booking) => {
              const dog = registeredDogs.find((dog) => dog.id === booking.dogId);
              const bookingDate = new Date(booking.bookingDate);
              const formattedDate = bookingDate.toISOString().substring(0, 10);

              return (
                <div className="booking-item">
                <li key={booking.id}>
                  Booking ID: {booking.id}, 
                  Dog ID: {booking.dogId}, 
                  Dog Name: {dog ? dog.dogName : 'Unknown'}, 
                  Date: {formattedDate}, 
                  Time: {booking.bookingTime}
                </li>
                </div>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default Schedule;

//fetch both bookings and dogs
//map through bookings 
// bookingDate: date.toISOString().substring(0,10),
// {time.toLocaleTimeString()}
// create new date
