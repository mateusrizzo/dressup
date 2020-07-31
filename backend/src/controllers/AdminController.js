const Seller = require ('../models/Seller');

module.exports = {
    async store(req, res){
        const{email} = req.body;
        const{password} = req.body;
        let seller = await Seller.findOne({email, password});

        if (!seller){
            seller = await Seller.create({email, password});
        }
        return res.json(seller);
    }
}