const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReadingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String
    },
    store: {
        type: String,
    },
    street: {
        type: String,
    },
    city: {
        type: String,

    },
    state: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    perGallon: {
        type: Number,
    },
    numGallons: {
        type: Number,
    }
    
})

module.exports = Reading = mongoose.model('reading', ReadingSchema)