const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    email: String,
    Password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

module.exports = mongoose.model('Buyer', BuyerSchema);