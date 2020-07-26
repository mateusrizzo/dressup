const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: 'mateusrizzodev@gmail.com',
    password: 'holanda1',
});

module.exports = mongoose.model('User', UserSchema);
