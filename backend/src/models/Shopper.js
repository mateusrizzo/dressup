const mongoose = require('mongoose');

const ShopperSchema = new mongoose.Schema({
    email: String,
    password: String,
});

module.exports = mongoose.model('Shopper', ShopperSchema);
