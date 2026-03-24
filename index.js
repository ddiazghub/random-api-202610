const crypto = require("crypto");
const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (re, res) => {
	res.status(200).send("Hello World!!!");
});

app.get("/random/int", (req, res) => {
	res.status(200).send(crypto.randomInt(1000000));
});

app.get("/random/float", (req, res) => {
	res.status(200).send(Math.random());
});

app.listen(PORT, () => console.log("Server running on port: ", PORT));
