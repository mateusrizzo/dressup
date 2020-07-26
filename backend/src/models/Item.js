const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    price: Number,
    category: String,
    tags: [String],
    listed: Boolean,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    }, {
        toJSON: {
            virtuals: true,
        },
});

ItemSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Item', ItemSchema);