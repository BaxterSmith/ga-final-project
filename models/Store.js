const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name: String,
    address: String,
    phoneNumber: String,
    email: String
});

module.exports = mongoose.model('Store', StoreSchema);