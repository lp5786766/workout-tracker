const router = require('express').Router();

const workout = require('../models/workout');

//create workout
router.post('/workouts', (req, res) => {
  workout
    .create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update/add exercise
router.put('/workouts/:id', (req, res) => {
  workout
    .updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((data) => {
      console.log(data);
      // console.log(`request: ${req}`);
      // console.log(`response: ${res}`);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get stats
router.get('/workouts/range', (req, res) => {
  workout
    .find({})
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
