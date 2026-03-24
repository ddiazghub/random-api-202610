const crypto = require("crypto");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (re, res) => {
  res.status(200).send("Hello World!!!");
});

app.get("/random/int", (req, res) => {
  res.status(200).send(crypto.randomInt(1000000));
});

app.listen(3000, () => console.log("Server running on port: ", 3000));
