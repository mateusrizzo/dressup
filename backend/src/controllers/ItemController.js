const {store} = require('./SessionController');

const Item = require('../models/Item');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const {filename} = req.file;
        const {name, price, category, tags, description, listed} = req.body;
        const {user_id} = req.headers; 

        const user = await User.findById(user_id);

        if (!user){
            return res.status(400).json({error: 'user does not exist'});
        }

        const item = Item.create({
            user: user_id,
            thumbnail: filename,
            name,
            price,
            category,
            tags: tags.split(',').map(tags => tags.trim()),
            description,
            listed: true,
        })
        return res.json(item)
    }
};
