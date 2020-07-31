const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    price: Number,
    category: String,
    tags: [String],
    listed: Boolean,
    description: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
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