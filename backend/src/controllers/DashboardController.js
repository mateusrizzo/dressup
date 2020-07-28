const Item = require('../models/Item');

module.exports = {
    async show(req, res){
        const {user_id} = req.headers;

        const items = await Item.find({user: user_id});

        return res.json(items)
    }
}