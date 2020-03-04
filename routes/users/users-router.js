const express = require('express');
const router = express.Router();

const Users = require('./users-model');
const restricted = require('../../auth/restricted');

router.get('/', restricted, (req, res) => {
  Users.getAll()
    .where({ user_id: req.decodedToken.subject})
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({
        error: "The users could not be retrieved."
      });
    });
});

router.get('/:id', restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(404).json({
        error: "You cannot access the user with that id."
      });
    });
});

module.exports = router;