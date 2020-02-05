const express = require("express");
const router = express.Router();

const db = require("../../data/dbConfig");
const restricted = require("../../auth/restricted");

router.get("/", restricted, (req, res) => {
  db("meals")
    .returning("id")
    .where({ user_id: req.decodedToken.subject })
    .then(meals => {
      res.status(200).json(meals)
    })
    .catch(error => {
      res.status(500).json({
        error: "The meals could not be retrieved."
      });
    });
});