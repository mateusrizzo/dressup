const User = require('../models/User');
const User = require('../models/User');

module.exports = {
    async store(res) {
        let admin = await User.create({
            email: 'mateusrizzodev@gmail.com',
            password: 'holanda1',
        });
        return res.json(admin);
    }
}