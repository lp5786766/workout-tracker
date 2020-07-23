const router = require('express').Router();

const workout = require('../models/workout');

router.post('/api/workouts', (req, res) => {
    workout.create({}).then()
});

