const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
});

module.exports = mongoose.model('Buyer', BuyerSchema);