const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: new Date().setDate(new Date().getDate()-10),
  exercises: [
    {
      type: "resistance",
      name: "Bicep Curl",
      duration: 20,
      weight: 100,
      reps: 10,
      sets: 4
    }
  ]
},);

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
