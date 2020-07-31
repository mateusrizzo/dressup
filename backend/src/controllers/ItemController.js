const {store} = require('./AdminController');

const Item = require('../models/Item');
const Seller = require('../models/Seller');

module.exports = {
    async store(req, res){
        const {filename} = req.file;
        const {name, price, category, tags, description, listed} = req.body;
        const {seller_id} = req.headers; 

        const seller = await Seller.findById(seller_id);

        if (!seller){
            return res.status(400).json({error: 'user does not exist'});
        }

        const item = await Item.create({
            seller: seller_id,
            thumbnail: filename,
            name,
            price,
            category,
            tags: tags.split(',').map(tags => tags.trim()),
            description,
            listed,
        })
        return res.json(item)
    }
};
