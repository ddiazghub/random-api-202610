const crypto = require("crypto");
const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();

app.use(express.json());

app.get("/", (re, res) => {
  res.status(200).send("Hello World!!!");
});

app.get("/random/int", (req, res) => {
  res.status(200).send(crypto.randomInt(1000000));
});

app.get("/random/person", (req, res) => {
  const person = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate(),
  };

  res.status(200).send(person);
});

app.listen(3000, () => console.log("Server running on port: ", 3000));
