const Item = require('../models/Item');

module.exports = {
    async show(req, res){
        const {seller_id} = req.headers;

        const items = await Item.find({seller: seller_id});

        return res.json(items)
    }
}