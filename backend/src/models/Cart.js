const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    Amount: Number,
});

module.exports = mongoose.model('Cart', CartSchema);