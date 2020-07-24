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
  // console.log(req);
  workout
    .findOneAndUpdate({ _id: req.params.id }, { $push: {} })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
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

module.exports = router;
