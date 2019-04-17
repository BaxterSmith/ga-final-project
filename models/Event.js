const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    numAttendees: Number,
    date: String,
    description: String,
    store: {}
});

module.exports = mongoose.model('Event', EventSchema);