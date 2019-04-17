const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    age: String,
    gender: String,
    breed: String,
    coatColor: String,
    weight: Number,
    imgLink: String,
    store: {}
});

module.exports = mongoose.model('Dog', DogSchema);