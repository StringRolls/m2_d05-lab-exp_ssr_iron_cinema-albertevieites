const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars:{ type: [String], required: true }, 
    image: { type: String, required: true }, 
    description: { type: String, required: true },
    showtimes: { type: [String], required: true },
  },
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;


