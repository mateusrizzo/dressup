const Cart = require('../models/Cart');
const Item = require('../models/Item');
const Buyer = require('../models/Buyer');
const { store, show } = require('./AdminController');

module.exports = {
    async store(req, res){
        const{item_id, buyer_id} = req.headers;
        const {amount} = req.body;

        const item = await Item.findById(item_id);
        const buyer = await Buyer.findById(buyer_id);
        if(!item){
            return res.status(400).json({error: 'item does not exist'});
        }
        if(!buyer){
            return res.status(400).json({error: 'user not found'});
        }
        const cart = await Cart.create({
            item: item_id,
            buyer: buyer_id,
            amount,
        })
        return res.json(cart);
    
    }
}
