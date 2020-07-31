const Buyer = require('../models/Buyer');

module.exports = {
    async store(req, res){
        const{email} = req.body;
        const{password} = req.body;
        const{name} = req.body;
        let buyer = await Buyer.findOne({email, password});

        if (buyer){
            return res.status(200).json({error: 'user already exists'});
        }else{
            buyer = await Buyer.create({email, password, name});
            return res.json(buyer);
        }
    },
    async show(req, res){
        const{email} = req.body;
        const{password} = req.body;
        let buyer = await Buyer.findOne({email, password});

        if(!buyer){
            return res.status(400).json({error: 'user does not exist'});
        }else{
            return res.json(buyer);
        }
    }
}