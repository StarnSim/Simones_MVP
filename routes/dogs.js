var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res) {
  db("SELECT * from dogs;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

//Get one User for dogs
router.get("/:id", async (req, res) => {
  try {
    const dogsId = req.params.id;
    const results = await db(`SELECT * FROM dogs Where id = "${dogsId}";`);

    res.send(results.data);

  } catch (err) {
    res.status(500).send(err);
  }
});

//INSERT new User in DB for dogs

router.post("/", async (req, res) => {
 try {
    // The request's body is available in req.body
    const { dogName, age, breed, size, vaccination, neutered, gender, ownerName, email, address, phoneNumber, secondContactName, secondPhoneNumber } = req.body;
    // If the query is successfull you should send back the full list of items
    await db(`INSERT INTO dogs (dogName, age, breed, size, vaccination, neutered, gender, ownerName, email, address, phoneNumber, secondContactName, secondPhoneNumber ) 
    VALUES ("${dogName}", "${age}", "${breed}", "${size}", "${vaccination}", "${neutered}", "${gender}", "${ownerName}", "${email}", "${address}", "${phoneNumber}", "${secondContactName}", "${secondPhoneNumber}");`);
    
    const results = await db("SELECT * FROM dogs ORDER BY id ASC;");

    res.status(201).send({ message: "Dog was inserted" });
  } catch (err) {
    console.error("Error inserting dog:", err);
    res.status(500).send({ error: "Internal Server Error", details: err.message });
  }
});


//UPDATE User in DB


//DELETE a User from the DB

//create a guard

module.exports = router;


//INSERT INTO dogs (dogName, age, breed, size, vaccination, neutered, gender, ownerName) values ("Bowie", 2, "mixed", "medium", "yes", 1, "male", "Tasha");
//INSERT INTO dogs (dogName, age, breed, size, vaccination, neutered, gender, ownerName) values ("Gus",3, "Spaniel", "medium", "yes", 1, "male", "Joe");
//INSERT INTO dogs (dogName, age, breed, size, vaccination, neutered, gender, ownerName) values ("Pixie", 4, "Chihuahua", "small", "no", 1, "female", "Sarah");
