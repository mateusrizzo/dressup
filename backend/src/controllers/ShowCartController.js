const Cart = require('../models/Cart');
const { show } = require('./AdminController');

module.exports = {
    async show(req, res){
        const {buyer_id} = req.headers;

        const cart = await Cart.find({buyer: buyer_id});

        return res.json(cart)
    }
}