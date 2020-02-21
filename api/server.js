const express = require("express");
const Superheros = require("../superheros/superherosModel.js");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Hey...how'd you get in here?" });
});

server.get("/superheros", (req, res) => {
  Superheros.getAll()
    .then(superheros => {
      res.status(200).json(superheros);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;