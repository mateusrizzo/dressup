const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        amount: Number,
    }],
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    }
});

module.exports = mongoose.model('Cart', CartSchema);