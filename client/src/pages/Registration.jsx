import { useEffect, useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";

export default function Registration() {
  const [formData, setFormData] = useState({
    dogName: "",
    age: "",
    breed: "",
    size: "",
    vaccination: "",
    neutered: "",
    gender: "",
    ownerName: "",
    email: "",
    address: "",
    phoneNumber: "",
    secondContactName: "",
    secondPhoneNumber: "",
  });

  const [dogs, setDogs] = useState([]);
  const [registrationMessage, setRegistrationMessage] = useState("");

  useEffect(() => {
    getDogs();
    
  }, []);

  const getDogs = () => {
    fetch("/api/dogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dogs");
        }
        return response.json();
      })
      .then((dogs) => {
        setDogs(dogs);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setRegistrationMessage(`"${formData.dogName}" has been registered successfully!`);
      
      } else {
        setRegistrationMessage("Failed to register dog");
      }
    } catch (error) {
      setRegistrationMessage("Error:", error);
    }
  }

  return (
    <>
      <div className="container bg-light px-10 mb-5 rounded">
        <form
          onSubmit={handleSubmit}
          className="shadow  mb-5 py-3  bg-white rounded row"
        >
          <h1 className="display-1 position-absolute top-50 start-50 translate-middle text-center text-white">
          Register your Dog
        </h1>
        <img
          src="./src/assets/BTS_Images/pexels-johann-1254140.jpg"
          style={{ height: "auto", width: "500" }}
          className="img-fluid"
        />


          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="dogName"
              value={formData.dogName}
              onChange={handleChange}
              placeholder="Dogs Name"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Dogs Age"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Dogs Breed"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="Dogs Size"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="vaccination"
              value={formData.vaccination}
              onChange={handleChange}
              placeholder="Dogs Vaccination"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <select
              className="form-control rounded"
              name="neutered"
              value={formData.neutered}
              onChange={handleChange}
            >
              <option value="">Neutered</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="col-4 form-label mt-4">
            <select
              className="form-control rounded"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value=""> Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="OwnersName"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="secondContactName"
              value={formData.secondContactName}
              onChange={handleChange}
              placeholder="Secondary Contact Name"
            />
          </label>

          <label className="col-4 form-label mt-4">
            <input
              className="form-control rounded"
              type="text"
              name="secondPhoneNumber"
              value={formData.secondPhoneNumber}
              onChange={handleChange}
              placeholder="Secondary Phone Number"
            />
          </label>

          <div className="mt-4 text-center">
         <button type="submit"
          className="btn btn-success">
           <i className="fa-solid fa-paw"></i><br/>
            Boop to Submit
           </button>
            </div>
            {registrationMessage && <div>{registrationMessage}</div>}
        </form>
      </div>
    </>
  );
}

// 1. Do I need new state (data) for this? (Give it a name)
// 2. What is the initial value for that data
// 3. Show the  new data on the screen
// 4. Is this data going to change? If yes when and how


//move to component
