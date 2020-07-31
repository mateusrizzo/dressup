const Shopper = require ('../models/Shopper');

module.exports = {
    async store(req, res){
        const{email} = req.body;
        const{password} = req.body;
        let shopper = await Shopper.findOne({email, password});

        if (!shopper){
            shopper = await Shopper.create({email, password});
        }
        return res.json(shopper);
    }
}