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
    amount: Number,
});

module.exports = mongoose.model('Cart', CartSchema);