const User = require ('../models/User');

module.exports = {
    async index(req, res){
        const{email} = req.body;
        const{password} = req.body;
        let user = await User.findOne({email});
        let pass = await User.findOne({password});

        if (!user || !pass){
            return res.json('User and/or password incorrect');
        }
        return res.json(user, pass);
    }
}