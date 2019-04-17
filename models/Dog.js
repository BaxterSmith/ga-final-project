const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    breed: String,
    coatColor: String,
    weight: Number
});

module.exports = mongoose.model('Dog', DogSchema);