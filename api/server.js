const express = require("express");
const middleware = require('./middleware');

const authRouter = require("../auth/auth-router");
const mealsRouter = require("../routes/meals/meals-router");

const server = express();
middleware(server);

server.use("/api/auth", authRouter);
server.use("/api/meals", mealsRouter);

// routes
server.get('/', (req, res) => {
  res.send(`
    <h2>FoodFun API</h2>
    <p>Welcome!</p>
  `)
});

module.exports = server;