const express = require("express");
const middleware = require('./middleware');
const db = require('../data/dbConfig');

const server = express();
middleware(server);

// routes
server.get('/', (req, res) => {
  res.send(`
    <h2>FoodFun API</h2>
    <p>Welcome!</p>
  `)
});

server.get("/api/meals", (req, res) => {
  db('meals')
    .then(meals => {
      res.status(200).json(meals);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = server;