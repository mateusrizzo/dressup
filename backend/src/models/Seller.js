const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    email: String,
    password: String,
});

module.exports = mongoose.model('Seller', SellerSchema);
