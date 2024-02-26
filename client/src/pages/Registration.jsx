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
        console.log(`"${formData.dogName}" registered successfully!`);
      } else {
        console.error("Failed to register dog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="container bg-light px-10 mb-5">
        <form
          onSubmit={handleSubmit}
          className="shadow  mb-5 py-3  bg-white rounded row"
        >
          <label className="col-4 form-label mt-4">
            Dogs Name
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
            Dogs Age
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
            Breed
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
            Size
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
            Vaccination
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
            Neutered
            <select
              className="form-control rounded"
              name="neutered"
              value={formData.neutered}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="col-4 form-label mt-4">
            Gender
            <select
              className="form-control rounded"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label className="col-4 form-label mt-4">
            Owner's Name
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
            email
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
            Address
            <input
              className="form-control rounded"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="address"
            />
          </label>

          <label className="col-4 form-label mt-4">
            Phone Number
            <input
              className="form-control rounded"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="PhoneNumber"
            />
          </label>

          <label className="col-4 form-label mt-4">
            Secondary Contact Name
            <input
              className="form-control rounded"
              type="text"
              name="secondContactName"
              value={formData.secondContactName}
              onChange={handleChange}
              placeholder="ContactName"
            />
          </label>

          <label className="col-4 form-label mt-4">
            Secondary Phone Number
            <input
              className="form-control rounded"
              type="text"
              name="secondPhoneNumber"
              value={formData.secondPhoneNumber}
              onChange={handleChange}
              placeholder="PhoneNumber"
            />
          </label>

          <div className="col-4 mt-4">
            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-paw"></i>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

// 1. Do I need new state (data) for this? (Give it a name)
// 2. What is the initial value for that data
// 3. Show the  new data on the screen
// 4. Is this data going to change? If yes when and how
