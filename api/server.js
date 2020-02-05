const express = require("express");
const middleware = require('./middleware');

const authRouter = require("../auth/auth-router");

const server = express();
middleware(server);

server.use("/api/auth", authRouter);

// routes
server.get('/', (req, res) => {
  res.send(`
    <h2>FoodFun API</h2>
    <p>Welcome!</p>
  `)
});

module.exports = server;