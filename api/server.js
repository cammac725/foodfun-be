const express = require("express");
const middleware = require('./middleware');

const server = express();
middleware(server);

// routes
server.get('/', (req, res) => {
  res.send(`
    <h2>FoodFun API</h2>
    <p>Welcome!</p>
  `)
});

module.exports = server;