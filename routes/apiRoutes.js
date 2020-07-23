const router = require('express').Router();

const workout = require('../models/workout');

//create workout
router.post('/workouts', (req, res) => {
  workout.create({}).then();
});

// update/add exercise
router.put('/workouts', (req, res) => {
  workout.insert({}).then();
});

router.get('/stats', (req, res) => {
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
