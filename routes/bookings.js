var express = require('express');
var router = express.Router();
const db = require("../model/helper");

router.get('/', function(req, res) {
  db("SELECT * from bookings;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

//Get one booking by id
router.get("/:id", async (req, res) => {
  try {
    const bookingsId = req.params.id;
    const results = await db(`SELECT * FROM bookings Where id = "${bookingsId}";`);

    res.send(results.data[0]);

  } catch (err) {
    res.status(500).send(err);
  }
});

//INSERT new booking in DB for bookings
router.post("/", async(req, res) => {
  try {
     const { dogId, bookingDate, bookingTime } = req.body;
     await db(`INSERT INTO bookings (dogId, bookingDate, bookingTime) VALUES ("${dogId}","${bookingDate}", "${bookingTime}");`);

     const results = await db("SELECT * FROM bookings ORDER BY id ASC;");

     res.status(201).send({ message: "Booking was created" });
   } catch (err) {
     console.error("Error creating booking:", err);
     res.status(500).send({ error: "Internal Server Error", details: err.message });
   }
 });

 //DELETE  a booking in DB for bookings
router.delete("/:id", async (req, res) => {
  try {
     const { id } = req.params;
     await db(`DELETE FROM bookings WHERE id = ${id};`);

     res.status(200).send({ message: "Booking was deleted" });
   } catch (err) {
     res.status(500).send({ error: "Internal Server Error", details: err.message });
   }
 });


module.exports = router;

//INSERT INTO bookings (dogId, bookingDate, bookingTime) VALUES (1,'2024-02-21', 'HalfDayAM');
//INSERT INTO bookings (dogId, bookingDate, bookingTime) VALUES (2,'2024-02-21', 'HalfDayPM');
//INSERT INTO bookings (dogId, bookingDate, bookingTime) VALUES (3,'2024-02-21', 'FullDay');


