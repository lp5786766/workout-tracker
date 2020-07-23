const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  exercises: {
    type: Array,
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
